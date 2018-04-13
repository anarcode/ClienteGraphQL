import { Component } from '@angular/core';
import { ConfiguracionAnimacion } from '../../boot/app.configuration';
import { Observable } from 'rxjs/Observable';
import { Actor } from '../../models/actor';
import { ActoresService } from '../../services/actores.service';

@Component({
  selector: 'ver-actores',
  templateUrl: './ver-actores.component.html',
  styleUrls: ['./ver-actores.component.scss'],
  ...ConfiguracionAnimacion
})
export class VerActoresComponent
{
  private Actores: Observable<Actor[]>;

  constructor(private datos: ActoresService)
  {
    this.Actores = this.datos.Actores;
  }

  ObtenerDatos()
  {
    this.datos.Obtener();
  }
}
