import { AnimacionCambioDeVista } from "../animations/cambio-vista";
import { Injectable } from "@angular/core";

export const ConfiguracionAnimacion = {
  animations: [AnimacionCambioDeVista],
  host: { '[@cambioDeVista]': '' }
}

@Injectable()
export abstract class Configuracion
{
  abstract UrlBase: string;
}
