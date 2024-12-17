import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuModel } from 'src/app/models/menu/menu.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent {

  constructor(private ac: ActivatedRoute, private menuService: MenuService) { }


  menu = new MenuModel();

  ngOnInit(): void {
    this.menuService.getMenuById(this.ac.snapshot.params['id']).subscribe(
      (data) => {
        this.menu = data;
      });
  }

  msg = '';

  updateMenu(form: any) {
    if (form.mark == 0) {
      this.msg = 'Mark cannot be zero';
    } else if (form.mark > 5) {
      this.msg = 'Value must be less than or equal to 5';
    } else {
      this.menuService.getMenuById(this.ac.snapshot.params['id']).subscribe(
        (menu) => {
          menu.mark = (menu.mark + form.mark) / 2;
          this.menuService.updateMenu(menu, this.ac.snapshot.params['id']).subscribe(
            () => {
              this.menu.mark = menu.mark;
              console.log('Menu updated');
              alert('Menu updated successfully');
              //form.reset();
            });
        });
    }
  }

}
