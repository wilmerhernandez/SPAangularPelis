import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { detail } from '../../constansMock/detailMock';
import { MoviesService } from '../movies/movies.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any>{
  id: any;


  constructor(private movies : MoviesService) { }

  

  resolve(route: ActivatedRouteSnapshot):Observable<any>{
    this.id = route.paramMap.get('dato');
    console.log(this.id)
 
    return this.movies.getDetailMovie(this.id)
  }
}
