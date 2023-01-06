import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanPhimComponent } from './ban-phim/ban-phim.component';
import { ManHinhComponent } from './man-hinh/man-hinh.component';

@NgModule({
  declarations: [
    AppComponent,
    BanPhimComponent,
    ManHinhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
