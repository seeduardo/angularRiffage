import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiffComponent } from './riff.component';

describe('RiffComponent', () => {
  let component: RiffComponent;
  let fixture: ComponentFixture<RiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
