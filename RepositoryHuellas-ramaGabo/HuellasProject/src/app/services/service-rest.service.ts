import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Posteo } from '../clases/posteo';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceRestService {

  http = inject(HttpClient)

  URL: string = 'http://localhost:3300';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  })
  };
  //------GET LISTA POSTEO-------
  getPosteoList(): Observable<Posteo[]>{
    return this.http.get<Posteo[]>(`${this.URL}/posteo/`).pipe(
      tap((Posteo) => console.log('Posteo Obtenido')),
      catchError(this.handleError<Posteo[]>('Get Posteo',[]))
    );
  }

  //------CREAR LISTA POSTEO-------
addPosteo(post: Posteo): Observable<any>{
  return this.http.post<Posteo>(`${this.URL}/posteo/`, post, this.httpHeader)
  .pipe(catchError(this.handleError<Posteo[]>('Add Posteo'))
  )
}

  //funcion para manejar errores
  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`$(operation) failed:${error.message}`);
      return of (result as T);
    } 
  }

}
