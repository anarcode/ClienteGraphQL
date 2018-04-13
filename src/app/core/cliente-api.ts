import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Configuracion } from "../boot/app.configuration";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ClienteApi
{
  private readonly URL_BASE: string;
  private readonly URL_CONSULTA: string;

  constructor(private config: Configuracion, private http: HttpClient)
  {
    this.URL_BASE = `${this.config.UrlBase}/RestConGraph/`;
    this.URL_CONSULTA = `${this.URL_BASE}GraphQL/`;
  }

  public consulta<T>(body: any) : Promise<T>
  {
    return new Promise<T>(
      (resolve, reject) =>
      {
        var sub = this
        .http.post(
          `${this.URL_CONSULTA}`,
          btoa(body),
          { observe: 'response', responseType: 'text' }
        )
        .subscribe(
          r => resolve(JSON.parse(r.body)),
          error => reject(error),
          () => sub.unsubscribe()
        );
      }
    );
  }

  //Esto mejor tiparlo => post<T>(endPoint: string, body: T)
  public post(endPoint: string, body: any): Promise<number>
  {
    return new Promise<number>(
      (resolve, reject) =>
      {
        var sub = this
        .http.post(
          `${this.URL_BASE}${endPoint}`,
          btoa(body),
          { observe: 'response', responseType: 'text' }
        )
        .subscribe(
          r =>
          {
            if(/^\d+$/.test(r.body))
            {
              resolve(parseInt(r.body))
            }
            else
            {
              reject({
                Texto: 'Se esperaba un número y no sé que ha llegado',
                Objeto: r.body
              });
            }
          },
          error => reject(error),
          () => sub.unsubscribe()
        );
      }
    );
  }

  public delete(endPoint: string): Promise<void>
  {
    return new Promise<void>(
      (resolve, reject) =>
      {
        var sub = this
        .http.delete(
          `${this.URL_BASE}${endPoint}`,
          { observe: 'response', responseType: 'text' }
        )
        .subscribe(
          r => resolve(),
          error => reject(error),
          () => sub.unsubscribe() //Espero que esto no pete recursively
        );
      }
    )
  }
}
