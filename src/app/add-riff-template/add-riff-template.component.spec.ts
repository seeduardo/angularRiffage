import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiffTemplateComponent } from './add-riff-template.component';

describe('AddRiffTemplateComponent', () => {
  let component: AddRiffTemplateComponent;
  let fixture: ComponentFixture<AddRiffTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRiffTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiffTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
