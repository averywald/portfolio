import { Component, OnInit } from '@angular/core';
import { ISection } from './models/ISection';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'portfolio';
  sections: [ISection];

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.getSections().subscribe(data => this.sections = data);
  }
  
}
