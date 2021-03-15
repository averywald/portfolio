import { Component, Input, OnInit } from '@angular/core';
import { IBlurb } from 'src/app/models/IBlurb';
import { ISection } from 'src/app/models/ISection';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Input('type') type: string;

  public isFormOpen: boolean;
  
  private content: ISection | [IBlurb];

  constructor() {}

  ngOnInit(): void {
    console.log(this.type);

    this.isFormOpen = false;
  }

  createNew(): void {
    // implement
  }

  toggleForm(): void {
    if (this.isFormOpen) {
      
    }
  }

}
