import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { AddPlayerFormComponent } from './components/add-player-form/add-player-form.component';
import { TeamComponent } from './components/team/team.component';
//
import { PlayerFetchService } from '../app/services/player-fetch.service';
import { TeamFetchService } from '../app/services/team-fetch.service';
import { RatingsComponent } from './components/ratings/ratings.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
//


const appRoutes: Routes = [
  {path: 'player', component: PlayerComponent },
  {path: 'player/:id', component: PlayerComponent },
  {path: 'newPlayer', component: AddPlayerFormComponent },
  {path: 'team', component: TeamComponent },
  {path: 'register', component: RegisterFormComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AddPlayerFormComponent,
    TeamComponent,
    RatingsComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [PlayerFetchService, TeamFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
