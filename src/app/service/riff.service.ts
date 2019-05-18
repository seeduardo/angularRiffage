import { Injectable } from '@angular/core';
// import { MockData } from './../mock-data/mock-riff-data';
import { Observable } from 'rxjs';
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
        tap(riffs => {console.log('Riffs procured! Congrats: '); console.log(riffs);
      }),
        catchError(this.handleError('getRiffs', []))
    );
  }

  private handleError(operation = 'operation', result?: T) {
    return (error: any): Observable => {
      console.error(error);
      return of(result as T);
    }
  }

  getRiff(id: number): Observable<Riff> {
    const url = `${this.riffsUrl}/${id}`;
    return this.httpClient.get<Riff>(url).pipe(
      tap(() => console.log(`Riff with the id of ${id} successfully procured!`)), catchError(this.handleError<Riff> (`getHero id=${id}`))
    );
    // return of(this.riffs.find(riff => riff.id === id));
  }

  addRiff(riff: Riff): Observable {
    // this.riffs.push(riff);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post(this.riffsUrl, riff, httpOptions).pipe(
      tap(aRiff => console.log(`Riff of id ${aRiff.id} has been added! Kudos.`)),
      catchError(this.handleError('addRiff'))
    );
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
