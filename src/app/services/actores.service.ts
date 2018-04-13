import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppStore } from '../boot/app.store';
import { Store } from '@ngrx/store';
import { Actor } from '../models/actor';
import { OBTENER_ACTORES } from '../reducers/actores.reducer';
import { IContenedorDeActores } from '../interfaces/contenedor-de-actores';
import { ClienteApi } from '../core/cliente-api';

@Injectable()
export class ActoresService
{
  Actores: Observable<Actor[]>;

  constructor(private api: ClienteApi, private store: Store<AppStore>)
  {
    this.Actores = this.store.select(store => store.actores);
  }

  public Obtener(): void
  {
    this.api.consulta<IContenedorDeActores>('{ actores { nombre }}')
    .then(
      (datos: IContenedorDeActores) =>
      {
        //console.log('IContenedorDeActores => ', datos);
        this.store.dispatch({ type: OBTENER_ACTORES, payload: datos.actores })
      }
    )
    .catch(error => { console.log('ACTORES.SERVICE OBTENER ERROR => ', error); this.store.error(error); });
  }
}
