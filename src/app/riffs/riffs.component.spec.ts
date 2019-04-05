import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiffsComponent } from './riffs.component';

describe('RiffsComponent', () => {
  let component: RiffsComponent;
  let fixture: ComponentFixture<RiffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
