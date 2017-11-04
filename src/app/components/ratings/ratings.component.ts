import { Component, OnInit } from '@angular/core';
import { PlayerFetchService } from '../../services/player-fetch.service';
import { PlayerComponent } from '../player/player.component';
import { Ratings } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  rate: number;
  actualRatings: Ratings;
  newAvgRate: number;
  playerId: string;
  
  constructor(
    private PlayerFetch: PlayerFetchService,
    private PlayerComponent: PlayerComponent,
    ) { }

  ngOnInit() {
    this.rate = 5;
    this.actualRatings = this.PlayerComponent.player.ratings;
    this.playerId = this.PlayerComponent.playerId;
  }

  onPlus = () => {
    if(this.rate < 10) {
      this.rate = this.rate + 1;
    }
  }

  onMinus = () => {
    if(this.rate > 0) {
      this.rate = this.rate - 1;
    }
  }


  onSend = () => {
    this.PlayerFetch.onNewRate(this.rate, this.playerId).subscribe(res => {
      const newRatings = res.json();
       this.actualRatings.avgRate = newRatings.ratings.avgRate;
       this.actualRatings.bestRate = newRatings.ratings.bestRate;
       this.actualRatings.worstRate = newRatings.ratings.worstRate;
    });
  }
}
