import { RiffService } from './../service/riff.service';
import { Component, OnInit } from '@angular/core';
import { Riff } from '../models/riff';

@Component({
  selector: 'app-riffs',
  templateUrl: './riffs.component.html',
  styleUrls: ['./riffs.component.css']
})
export class RiffsComponent implements OnInit {

  riffs: Riff[] = [];

  constructor(public riffService: RiffService) {
  }

  ngOnInit() {
    this.riffService.getRiffs().subscribe(
      riffs => this.riffs = riffs
    );
  }

  upvoteRiff(riff: Riff) {
    this.riffService.upvote(riff)
    // this.riffs = this.riffService.getRiffs();
  }

  downvoteRiff(riff: Riff) {
    this.riffService.downvote(riff)
    // this.riffs = this.riffService.getRiffs();
  }

}
