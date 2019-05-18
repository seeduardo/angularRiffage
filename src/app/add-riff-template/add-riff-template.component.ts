import { Component, OnInit } from '@angular/core';
import { Riff } from '../models/riff';
import { RiffService } from './../service/riff.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-riff-template',
  templateUrl: './add-riff-template.component.html',
  styleUrls: ['./add-riff-template.component.css']
})
export class AddRiffTemplateComponent implements OnInit {

  riff: Riff = new Riff();
  angLevels = [1,2,3,4,5,6,7,8,9,10];
  riffFormSubmitted = false;

  constructor(private riffService: RiffService, private router: Router) { }

  // addRiff() {
  //   this.riff.votes = 0;
  //   this.riffService.addRiff(this.riff);
  //   this.riffFormSubmitted = true;
  //   this.router.navigateByUrl('/riffs');
  // };

  addRiff() {
    this.riff.votes = 0;
    this.riffService.addRiff(this.riff).subscribe(
      newRiff => {
        this.riffFormSubmitted = true;
        this.router.navigateByUrl('/riffs');
      });
  };

  ngOnInit() {
  }

}
