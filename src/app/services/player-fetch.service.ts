import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {Player} from '../interfaces/interfaces';


@Injectable()
export class PlayerFetchService {
url = 'http://localhost:5000/player';
options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

  constructor(public http: Http) { 
    console.log('data service running connected');
  }
  getOnePlayer(playerID: string){
   return this.http.get(`${this.url}/${playerID}`)
    .map(res => res.json());
  }

  getAllPlayersFromTeam(team: string){
    return this.http.get(`${this.url}/team/${team}`)
    .map(res => res.json());
  }
  postOnePlayer(newPlayer: Player){
    return this.http.post(`${this.url}`, {
      firstName: newPlayer.firstName,
      lastName: newPlayer.lastName,
      actualTeam: newPlayer.actualTeam,
      position: newPlayer.position,
    }, this.options);
}

onNewRate = (newRate, playerId) => {
  return this.http.post(`${this.url}/rating/${playerId}`, {
    newRate,
  }, this.options)
}

}


