import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ReadyPlayerComponent } from './ready-player/ready-player.component';
import { FirstQuestionComponent } from './first-question/first-question.component';
import { ScenarioDetailComponent } from './scenario-detail/scenario-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadyPlayerComponent,
    FirstQuestionComponent,
    ScenarioDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
