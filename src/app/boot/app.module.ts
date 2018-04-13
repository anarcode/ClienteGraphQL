import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MenuGeneralModule } from '../components/menu-general/menu-general.module';
import { AppRoutes } from './app.routes';
import { ServiciosModule } from '../services/servicios.module';
import { Configuracion } from './app.configuration';
import { ConfiguracionBase } from '../config/configuracion.base';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      AppRoutes
    ),
    ServiciosModule,
    MenuGeneralModule
  ],
  providers: [
    { provide: Configuracion, useClass: ConfiguracionBase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
