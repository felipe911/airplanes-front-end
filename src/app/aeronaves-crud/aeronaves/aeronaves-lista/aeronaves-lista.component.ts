import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aeronave } from '../../models/aeronave';
import { AeronavesService } from '../../services/aeronaves.service';

@Component({
  selector: 'app-aeronaves-lista',
  templateUrl: './aeronaves-lista.component.html',
  styleUrls: ['./aeronaves-lista.component.css']
})

export class AeronavesListaComponent implements OnInit {

  @Input() aeronaves: Aeronave[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['id', 'marca', 'nome', 'ano', 'vendido', 'acoes'];

  constructor(
    private aeronavesService: AeronavesService

  ) { }

  ngOnInit(): void {
  }

  adicionarAeronave() {
    this.add.emit(true);
  }

  deletarAeronave(id: number) {
    this.aeronavesService.deletar(id);
  }

  editarAeronave(aeronave: Aeronave) {
    this.edit.emit(aeronave);
  }

}
