import { Component, Input, OnInit } from '@angular/core';
import { IBlurb } from 'src/app/models/IBlurb';
import { ISection } from 'src/app/models/ISection';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  @Input('section-id') data: ISection;

  public blurbs: [IBlurb];
  public title: string;

  private id: string;

  constructor(private ds: DataService) {}

  ngOnInit(): void {

    // assign properties
    this.title = this.data.title;
    this.id = this.data.id;

    // need to get blurbs with this.data.id
    this.ds.getSectionBlurbs(this.id).subscribe(data => this.blurbs = data['blurbs']);
  }

}
