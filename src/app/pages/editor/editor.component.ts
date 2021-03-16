import { Component, Input, OnInit } from '@angular/core';
import { IBlurb } from 'src/app/models/IBlurb';
import { ISection } from 'src/app/models/ISection';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Input('type') type: string;

  public isFormOpen: boolean;

  private content: ISection | [IBlurb];

  private itemTitle: string;
  private itemContent: [string];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.isFormOpen = false;
  }

  createNew(): void {
    // implement
    console.log(`title: ${this.itemTitle}`);
    console.log(`content: ${this.itemContent}`);
  }

  toggleForm(): void {
    this.isFormOpen = (this.isFormOpen) ? false : true;
  }

}
