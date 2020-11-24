import { Directive, ElementRef, HostListener } from "@angular/core";
import { PlayerService } from "../services/player.service";

@Directive({
  selector: "input[appAddPlayer]"
})
export class AddPlayerDirective {
  constructor(
    private el: ElementRef<HTMLInputElement>,
    private playerService: PlayerService
  ) {}

  @HostListener("keyup.enter")
  public onKeyupEnter() {
    this.playerService.addPlayer({ playerName: this.el.nativeElement.value });
    this.el.nativeElement.value = "";
  }
}
