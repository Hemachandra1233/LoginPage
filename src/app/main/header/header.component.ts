import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navToHome() {
    this.route.navigate(['main/home']);
  }

  navToContactUs() {
    this.route.navigate(['main/contactus']);
  }

  navToAboutUs() {
    this.route.navigate(['main/aboutus']);
  }

}
