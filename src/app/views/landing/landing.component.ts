import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  fileChange(args) {
    console.log("File Change Achieved");
  };

  upload() {
    console.log("upload pressed");
  };

}
