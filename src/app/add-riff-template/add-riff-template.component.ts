import { Component, OnInit } from '@angular/core';
import { Riff } from '../models/riff';
import { RiffService } from './../service/riff.service'


@Component({
  selector: 'app-add-riff-template',
  templateUrl: './add-riff-template.component.html',
  styleUrls: ['./add-riff-template.component.css']
})
export class AddRiffTemplateComponent implements OnInit {

  riff: Riff = new Riff();
  angLevels = [1,2,3,4,5,6,7,8,9,10];
  riffFormSubmitted = false;

  constructor(public riffService: RiffService) { }

  addRiff() {
    this.riffService.addRiff(this.riff);
    this.riffFormSubmitted = true;
  };

  ngOnInit() {
  }

}
