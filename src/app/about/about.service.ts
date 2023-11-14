import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  myAppUrl: any;
  constructor(private http: HttpClient) {}

  getAbout(): Observable<any> {
    let url = 'https://portfolio-fe27f-default-rtdb.firebaseio.com/about.json';
    return this.http.get(url).pipe(map((res) => res));
  }
}
