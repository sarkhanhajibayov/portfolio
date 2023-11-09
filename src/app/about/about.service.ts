import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  });
  myAppUrl: any;
  constructor(private http: HttpClient) {}

  getAbout(): Observable<any> {
    let url = 'https://portfolio-fe27f-default-rtdb.firebaseio.com';
    return this.http
      .get(url, {
        headers: this.headers,
      })
      .pipe(map((res) => res));
  }
}
