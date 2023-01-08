import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private _http: HttpClient) { }

  getLatestHeadlines(): Observable <any>{
    return this._http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=04629719754541139bb7651655054c19');
  }

}
