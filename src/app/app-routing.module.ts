import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { MenuDetailsComponent } from './core/components/menu-details/menu-details.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "reservation", loadChildren: () => import("./features/reservation/reservation.module").then(m => m.ReservationModule) },
  { path: "menu", loadChildren: () => import("./features/menu/menu.module").then(m => m.MenuModule) },
  { path: "details/:id", component: MenuDetailsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
