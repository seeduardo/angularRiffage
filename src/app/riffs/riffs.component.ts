import { MockData } from './../mock-data/mock-riff-data';
import { Component, OnInit } from '@angular/core';
import { Riff } from '../models/riff'

@Component({
  selector: 'app-riffs',
  templateUrl: './riffs.component.html',
  styleUrls: ['./riffs.component.css']
})
export class RiffsComponent implements OnInit {

  riffs: Riff[] = [];

  constructor() {
    this.riffs = MockData.Riffs;
  }

  ngOnInit() {
  }

}
