import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aeronave } from '../models/aeronave';
import { AeronavesService } from '../services/aeronaves.service';

@Component({
  selector: 'app-aeronaves',
  templateUrl: './aeronaves.component.html',
  styleUrls: ['./aeronaves.component.css']
})
export class AeronavesComponent implements OnInit {

  aeronaves: Observable<Aeronave[]>;

  displayedColumns = ['id', 'marca', 'nome', 'ano', 'vendido'];

  constructor(private aeronavesService : AeronavesService) { 
    this.aeronaves = this.aeronavesService.listarAeronaves();
  }

  ngOnInit(): void {
    
  }

}
