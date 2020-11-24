import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TimerService {
  private timerSubject = new BehaviorSubject<number>(0);
  private intervalID: number;

  constructor() {}

  public startTimer(sec: number = 60) {
    if (!!this.intervalID) return;
    this.timerSubject.next(sec);
    this.intervalID = setInterval(() => {
      this.timerSubject.next(this.timerSubject.value - 1);
    }, 1000);
  }

  public stopTimer() {
    if (!this.intervalID) return;
    clearInterval(this.intervalID);
    delete this.intervalID;
  }

  public get timer(): Observable<number> {
    return this.timerSubject.asObservable();
  }
}
