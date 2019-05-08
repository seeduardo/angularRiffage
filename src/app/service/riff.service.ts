import { Injectable } from '@angular/core';
import { MockData } from './../mock-data/mock-riff-data';
import { Riff } from '../models/riff';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class RiffService {

  riffs: Riff[] = [];

  constructor() {
    this.riffs = MockData.Riffs;
  }

  getRiffs(): Observable<Riff[]> {
    return of(this.riffs);
  }

  getRiff(id: number) {
    return this.riffs.find(riff => riff.id === id);
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
