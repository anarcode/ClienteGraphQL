import { Component } from '@angular/core';
import { ConfiguracionAnimacion } from '../../boot/app.configuration';
import { Observable } from 'rxjs/Observable';
import { Pelicula } from '../../models/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'ver-peliculas',
  templateUrl: './ver-peliculas.component.html',
  styleUrls: ['./ver-peliculas.component.scss'],
  ...ConfiguracionAnimacion
})
export class VerPeliculasComponent
{
  private Peliculas: Observable<Pelicula[]>;
  private NombreDePeliculaNueva: string = '';

  constructor(private datos: PeliculasService)
  {
    this.Peliculas = this.datos.Peliculas;
  }

  ObtenerDatos()
  {
    this.datos.Obtener();
  }

  Nueva(){
    this.datos.Guardar({
      nombre: this.NombreDePeliculaNueva
    });
  }

  Borrar(id: number){
    this.datos.Borrar(id);
  }
}
