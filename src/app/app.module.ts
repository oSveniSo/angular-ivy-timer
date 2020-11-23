import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TimerComponent } from "./timer/timer.component";
import { TimerService } from "./services/timer.service";
import { PlayerListComponent } from "./player-list/player-list.component";
import { PlayerComponent } from "./player-list/player/player.component";
import { PlayerService } from "./services/player.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TimerComponent,
    PlayerListComponent,
    PlayerComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, PlayerService]
})
export class AppModule {}
