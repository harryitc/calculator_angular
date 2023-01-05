import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonNumberComponent } from './button-number/button-number.component';
import { ScreenCasioComponent } from './screen-casio/screen-casio.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonNumberComponent,
    ScreenCasioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
