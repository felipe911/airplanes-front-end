import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aeronave } from '../models/aeronave';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeronavesService {

  private readonly API = 'http://localhost:8000/'

  constructor(private httpClient: HttpClient) { }

  listarAeronaves(){
    return this.httpClient.get<Aeronave[]>(this.API + "aeronaves/").pipe(first());
  }
}
