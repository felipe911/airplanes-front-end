import { Aeronave } from './../models/aeronave';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable } from 'rxjs';

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

  salvar(aeronave: Partial<Aeronave>): Observable<Aeronave>{
    aeronave.created = new Date();
    return this.httpClient.post<Aeronave>(this.API_POST + "aeronaves/", aeronave);
  }

  buscarById(id: any){
    return this.httpClient.get<Aeronave>(this.API + "aeronaves/" + id);
  }

  atualizar(id: any, aeronave: Partial<Aeronave>){
    return this.httpClient.put<Aeronave>(this.API + "aeronaves/" + id, aeronave);
  }

  deletar(id: number){
    this.httpClient.delete<Aeronave>(this.API_POST + "aeronaves/" + id).subscribe();
  }
}
