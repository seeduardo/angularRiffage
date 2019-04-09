import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiffModelComponent } from './add-riff-model.component';

describe('AddRiffModelComponent', () => {
  let component: AddRiffModelComponent;
  let fixture: ComponentFixture<AddRiffModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRiffModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiffModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
