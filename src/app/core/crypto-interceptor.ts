import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class CryptoInterceptor implements HttpInterceptor
{
  //MIRAR SI ME PUEDO LLEVAR LA CONFIG DEL INTERCEPTOR A OTRO MODULO Y QUE APLIQUE SOLO AL CLIENTEAPI
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    var request = req.clone({ body: btoa(req.body) });
    console.log('Request body => ', request.body);

    return next.handle(request).map((event: HttpEvent<any>) =>
    {
      if (event instanceof HttpResponse)
      {
        return event.clone({ body: atob(event.body) });
      }
    });
  }
}
