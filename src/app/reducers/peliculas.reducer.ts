import { CustomAction } from './custom-action';
import { Pelicula } from '../models/pelicula';

export const OBTENER_PELICULAS = 'OBTENER_PELICULAS';
export const AÑADIR_PELICULA = 'AÑADIR_PELICULA';
export const BORRAR_PELICULA = 'BORRAR_PELICULA';

export const peliculas = (state: Pelicula[] = [], accion: CustomAction) : Pelicula[] =>
{
  switch(accion.type)
  {
    case OBTENER_PELICULAS:
      return [...accion.payload];
    case AÑADIR_PELICULA:
      return [...state, accion.payload];
    case BORRAR_PELICULA:
      return state.filter(p => p.id != accion.payload);
    default: return state;
  }
}
