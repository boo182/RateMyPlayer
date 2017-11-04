import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Team} from '../interfaces/interfaces';

@Injectable()
export class TeamFetchService {
url = 'http://localhost:5000/team';
  constructor(public http: Http) {
    console.log('team data service running connected ');
  }
  getTeam = (teamId: number) => {
    return this.http.get(`${this.url}/${teamId}`).map(res => res.json());
  }
  getBestTeams = () => {
    const result = this.http.get(`${this.url}/frontTeams`).map(res => res.json());
    return result;
}

}

