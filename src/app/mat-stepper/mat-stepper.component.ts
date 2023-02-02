
import {Component, ViewChild} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.css']
})
export class MatStepperComponent {
  @ViewChild('mystepper') myStepper!: MatStepper|undefined;
  a:boolean=false;

  constructor() {
  }

  test()
  {
    this.a=true
    this.myStepper?.next()
  }
}
