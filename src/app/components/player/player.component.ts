import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PlayerFetchService } from '../../services/player-fetch.service';
import {Player} from '../../interfaces/interfaces';


@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  playerId: string;
  player: Player;
  playerDisplay = false;

  constructor(
    private PlayerFetch: PlayerFetchService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
    this.playerId = params.id ? params.id : null;
    
    this.getPlayer(this.playerId)
    });

  }
  
  getPlayer(playerId: string){
      this.PlayerFetch.getOnePlayer(playerId)
      .subscribe((res) => {
        this.player = res;
        this.playerDisplay = true;
      });
  }
}



