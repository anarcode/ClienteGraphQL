import { Injectable } from "@angular/core";
import { Configuracion } from "../boot/app.configuration";

@Injectable()
export class ConfiguracionBase extends Configuracion
{
  UrlBase: string = 'http://10.0.75.1/';
}
