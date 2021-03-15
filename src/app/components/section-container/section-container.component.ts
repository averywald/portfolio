import { Component, Input, OnInit } from '@angular/core';
import { IBlurb } from 'src/app/models/IBlurb';
import { ISection } from 'src/app/models/ISection';

import { DataService } from "../../services/data/data.service";

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  @Input('section-id') data: ISection;
  @Input('logged-in') editorMode: boolean;

  public blurbs: [IBlurb];
  public title: string;
  public id: string;

  private editorType = 'blurb'; // subsequent editor components are to add new blurbs

  constructor(private ds: DataService) {}

  ngOnInit(): void {

    // assign properties
    this.title = this.data.title;
    this.id = this.data.id;

    this.ds.getSectionBlurbs(this.id).subscribe(data => this.blurbs = data);
  }

}
