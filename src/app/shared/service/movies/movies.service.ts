import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  response: Observable<any[]> | undefined;
  page = '1';
  constructor(private http: HttpClient) {}

  getFilterMovies(page: string, type: string, text: string): Observable<any[]> {
    let params = new HttpParams();
    this.page = page != '' ? page : this.page;

    const filter = text != '' ? '' : '/trending';
    if (text != '') {
      params = params.append('keyword', text);
    } else {
      params = params.append('type', type != '' ? type : 'movie');
    }
    params = params.append('language', 'es-ES');
    params = params.append('page', this.page);
    const url = environment.endpoint + filter;
    this.response = this.http.get<any[]>(url, { params: params });
    return this.response;
  }


  getDetailMovie(id:string): Observable<any[]> {
    const url = environment.endpoint + "/"+id;
    console.log(url)
    return this.http.get<any[]>(url);
  }
}
