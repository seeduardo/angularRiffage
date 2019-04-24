import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Riff } from '../models/riff';
import { RiffService } from '../service/riff.service';

@Component({
  selector: 'app-add-riff-model',
  templateUrl: './add-riff-model.component.html',
  styleUrls: ['./add-riff-model.component.css']
})
export class AddRiffModelComponent implements OnInit {

  angLevels = [1,2,3,4,5,6,7,8,9,10];

  riffForm: FormGroup;

  riffTitle: FormControl;
  riffPurveyor: FormControl;
  riffAngularity: FormControl;

  constructor(private riffService: RiffService) { }

  ngOnInit() {

    this.riffTitle = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9].*$')]);
    this.riffPurveyor = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9].*$')]);
    this.riffAngularity = new FormControl('', [Validators.required, Validators.pattern('^([1-9]|10)$')]);

    this.riffForm = new FormGroup({
      'riffTitle': this.riffTitle,
      'riffPurveyor': this.riffPurveyor,
      'riffAngularity': this.riffAngularity
    });

  }

  riffFormSubmitted = false;

  addRiff(riff: Riff) {
    this.riffService.addRiff(riff);
    this.riffFormSubmitted = true;
  };

}
