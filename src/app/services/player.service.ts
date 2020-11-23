import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Player } from "../player-list/player/player";

@Injectable()
export class PlayerService {
  private playersSubject = new BehaviorSubject<Player[]>([]);

  constructor() {}

  public addPlayer(player: Player) {
    const tmpList = this.playersSubject.value;
    tmpList.push(player);
    this.playersSubject.next(tmpList);
  }

  public removePlayer(player: Player) {
    const tmpList = this.playersSubject.value.filter(p => p !== player);
    this.playersSubject.next(tmpList);
  }

  public get players(): Observable<Player[]> {
    return this.playersSubject.asObservable();
  }
}
