import { Component, OnInit, Input, Output } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {
  @Input() childCurrentPlayer: Player;

  chosenWeapon = null;

  chooseSword() {
    this.childCurrentPlayer.weapon = "godsword";
  }

  chooseWatch() {
    this.childCurrentPlayer.weapon = "watch";
  }

  chooseKnife() {
    this.childCurrentPlayer.weapon = "knife";
  }

  constructor() { }

  ngOnInit() {
  }

}
