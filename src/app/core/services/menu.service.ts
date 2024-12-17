import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from 'src/app/models/menu/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  addMenu(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/menu', data);
  }
  getAllMenu(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/menu');
  }
  getMenuById(id: number): Observable<MenuModel> {
    return this.http.get<any>(`http://localhost:3000/menu/` + id);
  }
  updateMenu(data: any, id: number): Observable<any> {
    return this.http.put<any>('http://localhost:3000/menu/' + id, data);
  }
}
