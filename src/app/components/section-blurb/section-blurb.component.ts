import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-section-blurb',
  templateUrl: './section-blurb.component.html',
  styleUrls: ['./section-blurb.component.scss']
  // providers: [ DataService ]
})
export class SectionBlurbComponent implements OnInit {

  message?: string;

  constructor(public ds: DataService) {
    this.message = this.ds.getGreeting();
  }

  ngOnInit(): void {
    
  }

}
