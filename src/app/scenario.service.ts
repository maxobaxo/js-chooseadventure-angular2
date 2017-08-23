import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { SCENARIOS } from './mock-scenarios';

@Injectable()
export class ScenarioService {

  constructor() { }

  getScenarios() {
    return SCENARIOS;
  }

  getScenarioById(scenarioId: number) {
    for (var i = 0; i < SCENARIOS.length; i++) {
      if (SCENARIOS[i].id === scenarioId) {
        return SCENARIOS[i];
      }
    }
  }
}
