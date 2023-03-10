import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatStepperComponent } from './mat-stepper/mat-stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MatStepperComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
