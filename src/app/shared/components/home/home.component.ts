import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuModel } from 'src/app/models/menu/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  menu: any[] = [];

  constructor(private menuService: MenuService) { }
  ngOnInit(): void {
    this.menuService.getAllMenu().subscribe(
      (data) => {
        this.menu = data;
      }
    )

  }




}
