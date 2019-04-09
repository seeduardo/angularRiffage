import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-riff-model',
  templateUrl: './add-riff-model.component.html',
  styleUrls: ['./add-riff-model.component.css']
})
export class AddRiffModelComponent implements OnInit {

  angLevels = ['Choose Level out of 10!', 1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

}
