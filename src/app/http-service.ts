import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorOutput } from './app.model';

  /**
   * Http service to help with fetch data
   */
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * Fetch result for passed querystring
   * @param {number} searcString Search string
   * @returns { Observable<ColorOutput>} Result 
   */
  fetchData(url: string): Observable<ColorOutput>{
    return this.http.get<ColorOutput>(url);
  }
}