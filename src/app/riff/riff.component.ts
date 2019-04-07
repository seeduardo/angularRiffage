import { Riff } from '../models/riff';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-riff',
  templateUrl: './riff.component.html',
  styleUrls: ['./riff.component.css']
})
export class RiffComponent implements OnInit {

  @Input() riff: Riff;
  @Output() upvoted = new EventEmitter();
  @Output() downvoted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upvote() {
    this.upvoted.emit(this.riff);
  }

  downvote() {
    this.downvoted.emit(this.riff);
  }

}
