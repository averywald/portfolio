import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

import { DataService } from 'src/app/services/data/data.service';

import { ISection } from 'src/app/models/ISection';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title = 'portfolio';
  sections: [ISection];

  private editorType = 'section';

  constructor(private ds: DataService, private router: Router) {}

  ngOnInit(): void {
    this.ds.getSections().subscribe(data => this.sections = data);
  }

  loggedIn(): boolean {
    return true; // implement
  }

}
