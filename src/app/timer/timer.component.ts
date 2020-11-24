import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Time, TimerService } from "../services/timer.service";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"]
})
export class TimerComponent implements OnInit {
  public timerTime: Time;
  private subs = new Subscription();

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.subs.add(this.timerService.timer.subscribe(t => (this.timerTime = t)));
  }

  startTimer() {
    this.timerService.startTimer();
  }

  resetTimer() {
    this.timerService.resetTimerTime();
  }

  get timeInPercent() {
    return `${(100 / this.timerTime.startTime) * this.timerTime.currentTime}%`;
  }
}
