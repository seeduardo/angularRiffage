import { Component, OnInit } from '@angular/core';
import { Riff } from '../models/riff';


@Component({
  selector: 'app-add-riff-template',
  templateUrl: './add-riff-template.component.html',
  styleUrls: ['./add-riff-template.component.css']
})
export class AddRiffTemplateComponent implements OnInit {

  riff: Riff = new Riff();
  angLevels = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

}
