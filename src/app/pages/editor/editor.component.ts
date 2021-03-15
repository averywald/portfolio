import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Input('type') type: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.type);
  }

}
