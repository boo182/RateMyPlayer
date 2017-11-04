export interface Player {
  firstName: string,
  lastName: string,
  actualTeam: string,
  position: string,
  teamId: number,
  playerId: number,
  rates: number[],
  ratings: Ratings
}

export interface Ratings {
  numberOfVotes: number,
  avgRate: number,
  bestRate: number,
  worstRate: number,
  oldAvg: number[]
}

export interface Team {
  teamName: string,
  creationDate: string,
  teamId: number,
  players: Player[]
}

export interface Specteam {
  name: string,
  logo: string
}

export interface User {
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordConfirm: string 
}
