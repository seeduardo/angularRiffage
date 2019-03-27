import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Riffage';

  allRiffs: Array<{riffTitle: string, riffPurveyor: string, riffAngularity: number}> = [];

  currentRiffTitle: string;
  currentRiffPurveyor: string;
  riffAngularity: number;

  constructor() {

    this.currentRiffTitle = 'Heaven Knows';
    this.currentRiffPurveyor = 'Other';
    this.riffAngularity = 4

  }

  addRiff(riff: {string, string, number}) {
    this.allRiffs.push(riff)
  }

}
