import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-riff-model',
  templateUrl: './add-riff-model.component.html',
  styleUrls: ['./add-riff-model.component.css']
})
export class AddRiffModelComponent implements OnInit {

  angLevels = ['Click here to choose angularity level', 1,2,3,4,5,6,7,8,9,10];

  riffForm: FormGroup;

  riffTitle: FormControl;
  riffPurveyor: FormControl;
  riffAngularity: FormGroup;

  constructor() { }

  ngOnInit() {

    this.riffTitle = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9].*$')]);
    this.riffPurveyor = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9].*$')]);
    this.riffAngularity = new FormControl('Click here to choose angularity level', Validators.pattern('^([1-9]|10)$'));

    this.riffForm = new FormGroup({
      'riffTitle': this.riffTitle,
      'riffPurveyor': this.riffPurveyor,
      'riffAngularity': this.riffAngularity
    });

  }

}
