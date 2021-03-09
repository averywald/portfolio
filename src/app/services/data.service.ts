import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  greeting: string;

  // should have a data model for certain data it is delivering
  constructor() {
    this.greeting = "hello from the service";
  }

  getGreeting(): string {
    return this.greeting;
  }

}
