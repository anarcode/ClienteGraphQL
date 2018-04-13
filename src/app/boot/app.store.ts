import { Pelicula } from "./../models/pelicula";
import { Actor } from "../models/actor";
import { IContenedorDePeliculas } from "../interfaces/contenedor-de-peliculas";
import { IContenedorDeActores } from "../interfaces/contenedor-de-actores";

export class AppStore implements IContenedorDePeliculas, IContenedorDeActores
{
  peliculas: Pelicula[];
  actores: Actor[];

  constructor() {
    this.peliculas = [];
    this.actores = [];
  }
}
