import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlurbComponent } from './section-blurb.component';

describe('SectionBlurbComponent', () => {
  let component: SectionBlurbComponent;
  let fixture: ComponentFixture<SectionBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
