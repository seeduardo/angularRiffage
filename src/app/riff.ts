export class Riff {

  currentRiffTitle: string;
  currentRiffPurveyor: string;
  currentRiffAngularity: number;
  allRiffs: Array<{riffTitle: string, riffPurveyor: string, riffAngularity: number}> = [{riffTitle: "Maximum Accident", riffPurveyor: "Aminiature", riffAngularity: 6}, {riffTitle: "Maze of Torment", riffPurveyor: "Morbid Angel", riffAngularity: 7}];

  constructor() {

  }

  addRiff(riff: {string, string, number}) {
    this.allRiffs.push(riff)
  }

}
