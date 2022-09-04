import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Aeronave } from '../models/aeronave';
import { AeronavesService } from '../services/aeronaves.service';

@Injectable({
  providedIn: 'root'
})
export class AeronaveResolver implements Resolve<Aeronave> {

  constructor(private aeronavesService: AeronavesService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aeronave> {
    if (route.params && route.params['id']) {
      return this.aeronavesService.buscarById(route.params['id']);
    }
    return of({id: 0, nome: '', marca: '', ano: 0, descricao: '', vendido: false, created: new Date(), updated: new Date()});
  }
}
