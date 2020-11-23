import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PlayerService } from "../services/player.service";
import { Player } from "./player/player";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"]
})
export class PlayerListComponent implements OnInit, OnDestroy {
  playerList: Player[];
  subs = new Subscription();

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.players.subscribe(
      (playerList: Player[]) => (this.playerList = playerList)
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
