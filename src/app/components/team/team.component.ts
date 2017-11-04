import { Component, OnInit } from '@angular/core';
import { TeamFetchService } from '../../services/team-fetch.service';
import {Player, Team} from '../../interfaces/interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  fullTeam: Team;
  teamDisplay: boolean;
  teamQuery: number;
  displayedTeams: any;

  constructor(private TeamFetch: TeamFetchService) { }

  ngOnInit() {
    this.teamDisplay = false;
    this.TeamFetch.getBestTeams().subscribe(res => {
      this.displayedTeams = res;
    });
  }

  getTeam(teamId) {
    this.TeamFetch.getTeam(teamId).subscribe(res => {
      this.fullTeam = {
        teamName: res.teamName,
        creationDate: res.creationDate,
        teamId: res.teamId,
        players: res.players,
    };
    if(res) {
      this.displayData(this.fullTeam);
    }
  });
}
  displayData(team) {
    if(typeof team !== 'undefined') {
      this.teamDisplay = true;
    }
  }
}



