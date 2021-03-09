import { Component, Input, OnInit } from '@angular/core';
import { IBlurb } from "../../models/IBlurb";

@Component({
  selector: 'app-section-blurb',
  templateUrl: './section-blurb.component.html',
  styleUrls: ['./section-blurb.component.scss']
})
export class SectionBlurbComponent implements OnInit {

  @Input('blurb-data') data: IBlurb;

  title: string;
  date?: string;
  items: [string];

  constructor() {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.date = this.data.date;
    this.items = this.data.items;
  }

}
