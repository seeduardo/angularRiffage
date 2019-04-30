import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiffDetailComponent } from './riff-detail.component';

describe('RiffDetailComponent', () => {
  let component: RiffDetailComponent;
  let fixture: ComponentFixture<RiffDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiffDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
