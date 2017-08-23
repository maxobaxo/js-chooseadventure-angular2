import { Component, OnInit, Input, Output } from '@angular/core';
import { Player } from '../player.model';
import { Scenario } from '../scenario.model';
import { Router } from '@angular/router';
import { ScenarioService } from '../scenario.service';


@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css'],
  providers: [ScenarioService]
})
export class FirstQuestionComponent implements OnInit {
  @Input() childCurrentPlayer: Player;
  scenarios: Scenario[];

  chosenWeapon = null;

  chooseSword() {
    this.childCurrentPlayer.weapon = "godsword";
    this.router.navigate(['scenarios', this.scenarios[0].id]);
  }

  chooseWatch() {
    this.childCurrentPlayer.weapon = "watch";
  }

  chooseKnife() {
    this.childCurrentPlayer.weapon = "knife";
  }

  constructor(private router: Router, private scenarioService: ScenarioService) { }

  ngOnInit() {
    this.scenarios = this.scenarioService.getScenarios();
  }

  goToDetailPage() {
    this.router.navigate(['scenarios', this.scenarios[0].id]);
  }

}
