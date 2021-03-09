import { Component, OnInit } from '@angular/core';
import { IBlurb } from 'src/app/models/IBlurb';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  public blurbs: [IBlurb];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getSectionBlurbs().subscribe(res => this.blurbs = res["blurbs"] );
  }

}
