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

  addRiff(riff: Riff) {
    this.riffs.push(riff);
  }

  upvote(riff: Riff) {
    riff.votes++
  }

  downvote(riff: Riff) {
    riff.votes >= 1
    ? riff.votes--
    : null
  }

}
