import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IBlurb } from '../models/IBlurb';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) {}

  private fetch<T>(path: string, headers?: HttpHeaders): Observable<T> {
    return this.hc.get(path) as Observable<T>; // return the json data
  }

  public getSectionBlurbs(): Observable<[IBlurb]> {
    // retreive data from the API
    return this.fetch<[IBlurb]>("../../assets/testBlurbs.json");
  }

}
