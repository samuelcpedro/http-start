import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    // this.http.post('https://udemy-ng-http-samu.firebaseio.com/', servers); // this will only create an observable
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('https://udemy-ng-http-samu.firebaseio.com/database.json', servers, { headers: headers});
    return this.http.post('https://udemy-ng-http-samu.firebaseio.com/database.json', servers);
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-samu.firebaseio.com/database.json');
  }
}
