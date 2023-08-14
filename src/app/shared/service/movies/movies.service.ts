import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  response: Observable<any[]> | undefined;
  page="1";
  constructor(private http: HttpClient) { }

  getFilterMovies(page:string,type:string,text:string): Observable<any[]> {
    this.page=page!=""?page:this.page;
    const typeVideo = type!=""?"&type="+type:"";
    const filter = text!=""?"?keyword="+text+"&":"/trending?"
    const url = environment.endpoint+filter+"page="+this.page+typeVideo+"&language=es-ES";
    this.response= this.http.get<any[]>(url);
    return this.response
  }

  
}
