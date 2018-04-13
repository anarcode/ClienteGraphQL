import { Component } from '@angular/core';
import { AnimacionCambioDeVista } from '../animations/cambio-vista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [AnimacionCambioDeVista]
})
export class AppComponent { }
