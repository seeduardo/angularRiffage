import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Riffage';
  
  currentRiffTitle: string;
  currentRiffPurveyor: string;
  riffAngularity: number;

  constructor() {

    this.currentRiffTitle = 'Heaven Knows';
    this.currentRiffPurveyor = 'Other';
    this.riffAngularity = 4

  }

}
