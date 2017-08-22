import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReadyPlayerComponent } from './ready-player/ready-player.component';
import { FirstQuestionComponent } from './first-question/first-question.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadyPlayerComponent,
    FirstQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
