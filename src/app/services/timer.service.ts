import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TimerService {
  private timerSubject = new BehaviorSubject<Time>(null);
  private intervalID: number;

  constructor() {}

  public startTimer(sec: Time = { startTime: 10 }) {
    if (!!this.intervalID) return;
    sec.currentTime = sec.startTime;
    this.timerSubject.next(sec);
    this.intervalID = setInterval(() => {
      const tmpTime = this.timerSubject.value;
      tmpTime.currentTime--;
      this.timerSubject.next(tmpTime);
      if (tmpTime.currentTime === 0) this.stopTimer();
    }, 1000);
  }

  public resetTimerTime(sec: Time = { startTime: 10 }) {
    sec.currentTime = sec.startTime;
    this.timerSubject.next(sec);
  }

  public stopTimer() {
    if (!this.intervalID) return;
    clearInterval(this.intervalID);
    delete this.intervalID;
    this.timerSubject.next(null);
  }

  public get timer(): Observable<Time> {
    return this.timerSubject.asObservable();
  }
}

export interface Time {
  readonly startTime: number;
  currentTime?: number;
}
