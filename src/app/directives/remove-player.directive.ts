import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { Player } from "../player-list/player/player";
import { PlayerService } from "../services/player.service";

@Directive({
  selector: "[appRemovePlayer]"
})
export class RemovePlayerDirective {
  @Input() player: Player;

  constructor(private el: ElementRef, private playerService: PlayerService) {
    this.el.nativeElement.style.cursor = "pointer";
  }

  @HostListener("click")
  public onClick() {
    this.playerService.removePlayer(this.player);
  }
}
