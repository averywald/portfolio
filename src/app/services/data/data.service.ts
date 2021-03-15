import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IAdmin } from "src/app/models/IAdmin";
import { IBlurb } from '../../models/IBlurb';
import { ISection } from "../../models/ISection";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private path: string = 'http://localhost:3000/portfolio/';

  constructor(private hc: HttpClient) {}

  private fetch<T>(path: string): Observable<T> {
    return this.hc.get(path) as Observable<T>; // return the json data
  }

  public getSections(): Observable<[ISection]> {
    return this.fetch<[ISection]>(`${this.path}sections`);
  }

  public getSectionBlurbs(sectionId: string): Observable<[IBlurb]> {
    return this.fetch<[IBlurb]>(`${this.path}blurbs?sectionId=${sectionId}`);
  }

  public queryAdmins(credentials: IAdmin): Observable<object> {
    return this.hc.get(`${this.path}admins?u=${credentials.username}&p=${credentials.password}`);
  }

}
