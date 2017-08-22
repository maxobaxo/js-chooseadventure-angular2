import { Component } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPlayer: Player = null;
  characterCreated = false;

  createCurrentPlayer(newPlayer) {
    this.currentPlayer = newPlayer;
    this.characterCreated = true;
  }

}
