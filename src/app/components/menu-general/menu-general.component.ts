import { Component, OnInit } from '@angular/core';
import { RUTA_VER_PELICULAS, RUTA_VER_ACTORES, RUTA_DRAG_DROP } from '../../config/rutas';

@Component({
  selector: 'menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.scss']
})
export class MenuGeneralComponent
{
  Opciones: any[] = [
    { Ruta: `/${RUTA_VER_PELICULAS}`, Nombre: 'Ver películas'},
    { Ruta: `/${RUTA_VER_ACTORES}`, Nombre: 'Ver actores'},
    { Ruta: `/${RUTA_DRAG_DROP}`, Nombre: 'Drag and drop'}
  ];

  constructor() { }

  Navegar(ruta: string)
  {
    console.log(ruta);
  }

}
