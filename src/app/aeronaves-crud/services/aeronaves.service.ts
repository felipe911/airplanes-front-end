import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aeronave } from '../models/aeronave';
import { delay, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeronavesService {

  private readonly API = '/'

  private readonly API_POST = 'http://localhost:8000/'

  constructor(private httpClient: HttpClient) { }

  listarAeronaves(){
    return this.httpClient.get<Aeronave[]>(this.API + "aeronaves/").pipe(first());
  }

  salvar(aeronave: Aeronave): Observable<Aeronave>{
    aeronave.created = new Date();
    return this.httpClient.post<Aeronave>(this.API_POST + "aeronaves/", aeronave);
  }
}
