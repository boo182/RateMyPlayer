import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerFetchService } from '../../services/player-fetch.service';
import {Player} from '../../interfaces/interfaces';


@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})
export class AddPlayerFormComponent implements OnInit {
firstName: string;
lastName: string;
actualTeam: string;
position: string;
positionDisplay: string[];
newPlayer: Player;
validationMessage: string;
newPlayerAdded: boolean;
playerAdded: Player;
  
  constructor(private playerService: PlayerFetchService) { }

  ngOnInit() {
    this.positionDisplay = ['GK', 'DC', 'DG', 'DD', 'MDC', 'MOC', 'MD', 'MG', 'ATD', 'ATG', 'AC'];
    this.newPlayerAdded = false;
}

  addNewPlayer = (event) => {
     this.newPlayer = {
       firstName: this.firstName,
       lastName: this.lastName,
       actualTeam: this.actualTeam,
       position: this.position,
       teamId: 2,
       playerId: 200,
       rates: [],
       ratings: {
        numberOfVotes: 0,
        avgRate: 0,
        oldAvg: [],
        bestRate: 0,
        worstRate: 0
  }
}
     this.playerService.postOnePlayer(this.newPlayer).subscribe((res) => {
       const playerAdded = res.json();
       this.newPlayerAdded = true;
       this.validationMessage = `${playerAdded.firstName} ${playerAdded.lastName} has been successfuly added.`;
    });
  }
}

