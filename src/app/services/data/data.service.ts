import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IBlurb } from '../../models/IBlurb';
import { ISection } from "../../models/ISection";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) {}

  private fetch<T>(path: string): Observable<T> {
    return this.hc.get(path) as Observable<T>; // return the json data
  }

  public getSections(): Observable<[ISection]> {
    return this.fetch<[ISection]>('http://localhost:3000/portfolio/sections');
  }

  public getSectionBlurbs(sectionId: string): Observable<[IBlurb]> {
    return this.fetch<[IBlurb]>(`http://localhost:3000/portfolio/blurbs?sectionId=${sectionId}`);
  }

}
