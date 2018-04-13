import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppStore } from '../boot/app.store';
import { Store } from '@ngrx/store';
import { Pelicula } from '../models/pelicula';
import { OBTENER_PELICULAS, AÑADIR_PELICULA, BORRAR_PELICULA } from '../reducers/peliculas.reducer';
import { IContenedorDePeliculas } from '../interfaces/contenedor-de-peliculas';
import { ClienteApi } from '../core/cliente-api';

@Injectable()
export class PeliculasService
{
  private readonly ENDPOINT: string = 'pelicula';
  Peliculas: Observable<Pelicula[]>;

  constructor(private api: ClienteApi, private store: Store<AppStore>)
  {
    this.Peliculas = this.store.select(store => store.peliculas);
  }

  public Obtener(): void
  {
    this.api.consulta<IContenedorDePeliculas>('{ peliculas { id nombre }}')
    .then(
      (datos: IContenedorDePeliculas) =>
      {
        this.store.dispatch({ type: OBTENER_PELICULAS, payload: datos.peliculas })
      }
    )
    .catch(error => { console.log('PELICULAS.SERVICE OBTENER ERROR => ', error); this.store.error(error); });
  }

  public Guardar(pelicula: Pelicula): void
  {
    this.api.post(this.ENDPOINT, pelicula)
    .then(
      (id: number) =>
      {
        pelicula.id = id;
        this.store.dispatch({ type: AÑADIR_PELICULA, payload: pelicula })
      }
    )
    .catch(error => { console.log('PELICULAS.SERVICE GUARDAR ERROR => ', error); this.store.error(error); });
  }

  public Borrar(id: number): void
  {
    this.api.delete(`${this.ENDPOINT}/${id}`)
    .then(
      () =>
      {
        this.store.dispatch({ type: BORRAR_PELICULA, payload: id })
      },
    )
    .catch(error => { console.log('PELICULAS.SERVICE BORRAR ERROR => ', error); this.store.error(error); });
  }
}
