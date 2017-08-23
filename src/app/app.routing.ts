import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioDetailComponent } from './scenario-detail/scenario-detail.component';


const appRoutes: Routes = [
  {
    path: 'scenarios/:id',
    component: ScenarioDetailComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
