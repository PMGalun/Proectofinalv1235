import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RedessocialesComponent } from './componentes/redessociales/redessociales.component';
import { AcercedemiComponent } from './componentes/acercedemi/acercedemi.component';
import { BannerComponent } from './componentes/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedessocialesComponent,
    AcercedemiComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }