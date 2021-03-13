import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IBlurb } from '../models/IBlurb';
import { ISection } from "../models/ISection";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) {}

  private fetch<T>(path: string, params?: HttpParams): Observable<T> {
    return this.hc.get(path, {params}) as Observable<T>; // return the json data
  }

  public getSections(): Observable<[ISection]> {
    return this.fetch<[ISection]>('localhost:3000/portfolio/');
  }

  public getSectionBlurbs(sectionId: string): Observable<[IBlurb]> {

    let p = new HttpParams();
    p.set('sectionId', sectionId);

    console.log(p.toString());
    
    this.fetch<[IBlurb]>('../../assets/testBlurbs.json', p).subscribe(res =>{
      console.log(res);
    });

    return this.fetch<[IBlurb]>('../../assets/testBlurbs.json');
  }

}
