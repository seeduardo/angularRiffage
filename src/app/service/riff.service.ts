import { Injectable } from '@angular/core';
import { MockData } from './../mock-data/mock-riff-data';
import { Riff } from '../models/riff';

@Injectable({
  providedIn: 'root'
})
export class RiffService {

  riffs: Riff[] = [];

  constructor() {
    this.riffs = MockData.Riffs;
  }

  getRiffs(): Riff[] {
    return this.riffs;
  }

  upvoteRiff(riff: Riff) {
    riff.votes++
  }

  downvoteRiff(riff: Riff) {
    riff.votes >= 0
    ? riff.votes--
    : null
  }

}
