import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuModel } from 'src/app/models/menu/menu.model';



@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {


  constructor(private menuService: MenuService) { }

  menu!: MenuModel


  fg = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),

  });

  addMenuafterOneClic(f: any) {
    this.menu = f;
    this.menu.approved = false;
    this.menu.mark = 0;
    this.menuService.addMenu(f).subscribe(
      () => {
        console.log('menu added')
        alert('menu added successfully')
        this.fg.reset();
      },
      (error) => {
        console.log('error adding menu')
      }
    );
  }
}
