import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReservationModule } from './features/reservation/reservation.module';
import { MenuModule } from './features/menu/menu.module';
import { MenuComponent } from './core/components/menu/menu.component';
import { MenuDetailsComponent } from './core/components/menu-details/menu-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MenuComponent,
    MenuDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReservationModule,
    MenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
