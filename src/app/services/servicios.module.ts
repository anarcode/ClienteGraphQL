import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { peliculas } from '../reducers/peliculas.reducer';
import { actores } from '../reducers/actores.reducer';
import { PeliculasService } from './peliculas.service';
import { ActoresService } from './actores.service';
import { ClienteApi } from '../core/cliente-api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CryptoInterceptor } from '../core/crypto-interceptor';

@NgModule({
  declarations: [
  ],
  imports:[
    StoreModule.forRoot({
      peliculas,
      actores
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CryptoInterceptor, multi: true },
    ClienteApi,
    PeliculasService,
    ActoresService
  ]
})
export class ServiciosModule { }
