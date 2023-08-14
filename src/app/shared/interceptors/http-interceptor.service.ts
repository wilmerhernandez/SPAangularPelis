import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedRequest = req.clone({
      setHeaders: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVJZCI6MSwiZW1haWwiOiJtZnZhQG1haWwuY29tIiwiaWF0IjoxNjkxOTQyODI4LCJleHAiOjE2OTIwMjkyMjh9.87pvoGB7pBsgmgaOjJxfY8878hyGkdyDxWHU41L4DQ4',
        'accept': 'application/json',
        "ngrok-skip-browser-warning": "69420"
      }
    });
    
    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
}
