import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riff',
  templateUrl: './riff.component.html',
  styleUrls: ['./riff.component.css']
})
export class RiffComponent implements OnInit {

  riff: Riff;

  constructor() { }

  ngOnInit() {
  }

}
