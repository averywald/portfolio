import { Component, OnInit } from '@angular/core';
import { ISection } from 'src/app/models/ISection';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title = 'portfolio';
  sections: [ISection];

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.getSections().subscribe(data => this.sections = data);
  }

}
