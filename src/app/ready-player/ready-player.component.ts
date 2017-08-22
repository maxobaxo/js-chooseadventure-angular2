import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-ready-player',
  templateUrl: './ready-player.component.html',
  styleUrls: ['./ready-player.component.css']
})
export class ReadyPlayerComponent implements OnInit {
  @Output() onSubmitClickSender = new EventEmitter();

  journeyBegun = false;

  onSubmit(name: string, age: number, faction: string) {
    var newPlayer = new Player(name, age, faction);
    this.onSubmitClickSender.emit(newPlayer);
  }

  beginJourney() {
    this.journeyBegun = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
