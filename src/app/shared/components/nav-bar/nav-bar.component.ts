import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) {

  }

  navigateToHome() {
    this.router.navigate(["home"]);
  }
  navigateToReservation() {
    this.router.navigate(["reservation"]);
  }
  navigateToMenu() {
    this.router.navigate(["menu"]);
  }
}
