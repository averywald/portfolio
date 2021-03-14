import { Component, Input, OnInit } from '@angular/core';
import { ISection } from 'src/app/models/ISection';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input('sections') sections: [ISection];

  constructor() { }

  ngOnInit(): void {
  }

}
