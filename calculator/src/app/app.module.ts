import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanPhimComponent } from './ban-phim/ban-phim.component';
import { ManHinhComponent } from './man-hinh/man-hinh.component';
import { KhungComponent } from './khung/khung.component';

@NgModule({
  declarations: [
    AppComponent,
    BanPhimComponent,
    ManHinhComponent,
    KhungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
