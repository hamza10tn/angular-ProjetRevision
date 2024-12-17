import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private router: Router) { }
  @Input() menu: any;


  goToDetails(id: number) {
    this.router.navigate(['/details/', id]);
  }
  goToReservation(id: number) {
    this.router.navigate(['/reservation/', id]);
  }


}
