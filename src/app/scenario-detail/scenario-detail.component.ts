import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scenario } from '../scenario.model';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-scenario-detail',
  templateUrl: './scenario-detail.component.html',
  styleUrls: ['./scenario-detail.component.css'],
  providers: [ScenarioService]
})
export class ScenarioDetailComponent implements OnInit {
  scenarioId: number = null;
  scenarioToDisplay: Scenario;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private scenarioService: ScenarioService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameter) => {
      this.scenarioId = parseInt(urlParameter['id']);
    });
    this.scenarioToDisplay = this.scenarioService.getScenarioById(this.scenarioId);
  }

}
