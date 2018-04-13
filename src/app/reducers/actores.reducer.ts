import { CustomAction } from './custom-action';
import { Actor } from '../models/actor';

export const OBTENER_ACTORES = 'OBTENER_ACTORES';

export const actores = (state: Actor[] = [], accion: CustomAction) : Actor[] =>
{
  switch(accion.type)
  {
    case OBTENER_ACTORES:
      return [...accion.payload];
    default: return state;
  }
}
