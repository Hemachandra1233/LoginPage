import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startingpage',
  templateUrl: './startingpage.component.html',
  styleUrls: ['./startingpage.component.scss']
})
export class StartingpageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navToMain() {
    this.route.navigate(['main']);
  }

}
