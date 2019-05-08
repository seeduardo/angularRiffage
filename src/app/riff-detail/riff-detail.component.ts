import { Component, OnInit } from '@angular/core';
import { RiffService } from './../service/riff.service';
import { Riff } from './../models/riff';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-riff-detail',
  templateUrl: './riff-detail.component.html',
  styleUrls: ['./riff-detail.component.css']
})
export class RiffDetailComponent implements OnInit {

  riff: Riff;

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private riffService: RiffService) { }

  ngOnInit() {

    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.riffService.getRiff(id).subscribe(
      riff => this.riff = riff
    );

  }

  goBack() {
    this.location.back();
  }

}
