import { Component } from '@angular/core';
// import { Riff } from './riff'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Riffage';
  riff: Riff;

  constructor() {

    this.riff = new Riff();
    this.riff.currentRiffTitle = 'Heaven Knows';
    this.riff.currentRiffPurveyor = 'Other';
    this.riff.currentRiffAngularity = 4;
    this.riff.allRiffs

  }

}
