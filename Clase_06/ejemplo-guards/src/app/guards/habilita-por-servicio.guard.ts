import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ParametrosService } from '../shared/parametros.service';

@Injectable({
  providedIn: 'root'
})
export class HabilitaPorServicioGuard implements CanActivate {
  
  constructor(private service : ParametrosService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.pasa;
  }
  
}
