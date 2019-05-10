import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryRiffService extends InMemoryDbService {

  constructor() { }

  createDb() {
    const riffs = [
      {
        'id': 1,
        'riffTitle': "Maximum Accident",
        'riffPurveyor': "Aminiature",
        'riffAngularity': 6,
        'votes': 0
      },
      {
        'id': 2,
        'riffTitle': "Maze of Torment",
        'riffPurveyor': "Morbid Angel",
        'riffAngularity': 7,
        'votes': 0
      }
    ];
    return { riffs };
  }

}
