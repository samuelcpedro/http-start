import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    // this.http.post('https://udemy-ng-http-samu.firebaseio.com/', servers); // this will only create an observable
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('https://udemy-ng-http-samu.firebaseio.com/database.json', servers, { headers: headers});
    // return this.http.post('https://udemy-ng-http-samu.firebaseio.com/database.json', servers);
    return this.http.put('https://udemy-ng-http-samu.firebaseio.com/database.json', servers);
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-samu.firebaseio.com/database.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      );
  }
}


/**
 * RxJS 6 without rxjs-compat
 * Section 18, Lecture 245
 *
 * Don't forget - if you're using Angular (and therefore also RxJS 6+) and you're
 * NOT using rxjs-compat  (npm install --save rxjs-compat  - you may ignore this lecture then,
 * use the code as shown in the videos!), you have to use operators like map()  differently:
 *
 *
 * Instead of
 *    ....map(...)
 * use
 *    ....pipe(map(...))
 *
 * map also needs to be imported:
 *
 * Instead of
 *    import 'rxjs/Rx';
 * use
 *    import { map } from 'rxjs/operators';
 *
 */
/**
 * Catching Errors without rxjs-compat
 * Section 18, Lecture 248
 *
 * Are you using Angular 6 (and therefore RxJS 6+) and you're NOT using
 * rxjs-compat
 *     (npm install --save rxjs-compat  - you may ignore this lecture then, use the code as shown in the videos!)?
 *
 * You then have to use the catch()  operator you'll see in the next lecture a bit differently.
 *
 * Instead of
 *
 *    ....catch(error => {
 *         return Observable.throw(...)
 *       })
 *
 * use
 *
 *    ....pipe(catchError(error => {
 *         return throwError(...)
 *       }))
 *
 * And make sure to import it:
 *
 * Instead of
 *
 *   import 'rxjs/Rx';
 *
 * and
 *   import { Observable } from 'rxjs/Observable';
 * use
 *   import { catchError } from 'rxjs/operators';
 * and
 *   import { throwError } from 'rxjs';
 */
