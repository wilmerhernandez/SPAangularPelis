import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { detail } from '../../constansMock/detailMock';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any>{


  constructor() { }

  resolve(route: ActivatedRouteSnapshot){

    return detail
  }
}
