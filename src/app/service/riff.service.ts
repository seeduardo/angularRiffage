import { Injectable } from '@angular/core';
// import { MockData } from './../mock-data/mock-riff-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.httpClient.get<Riff[]>(this.riffsUrl).pipe(
        catchError(this.handleError('getRiffs', []))
    );
  }

  private handleError(operation = 'operation', result?: T) {
    return (error: any): Observable => {
      console.error(error);
      return of(result as T);
    }
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
