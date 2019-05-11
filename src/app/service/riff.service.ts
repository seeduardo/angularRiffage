import { Injectable } from '@angular/core';
import { MockData } from './../mock-data/mock-riff-data';
import { Riff } from '../models/riff';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiffService {

  // riffs: Riff[] = [];
  riffsUrl = 'api/riffs';

  constructor(private httpClient: HttpClient) {
    // this.riffs = MockData.Riffs;
  }

  getRiffs(): Observable<Riff[]> {
    // return of(this.riffs);
    return this.httpClient.get<Riff[]>(this.riffsUrl)
  }

  getRiff(id: number): Observable {
    return of(this.riffs.find(riff => riff.id === id));
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
