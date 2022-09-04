import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Aeronave } from '../models/aeronave';
import { AeronavesService } from '../services/aeronaves.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form = this.formBuilder.group({
    nome: [''],
    ano: [0],
    marca: [''],
    vendido: [false],
    descricao: [''],
    created: [new Date()]
  });

  btnSubmit: String = 'Salvar';
  tittle: String = 'Adicionar';
  idAeronave: any;

  constructor(

    private formBuilder: NonNullableFormBuilder,
    private service: AeronavesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute

  ) {
  }

  ngOnInit(): void {
    const aeronave: Aeronave = this.route.snapshot.data['aeronave'];
    this.form.setValue({
      nome: aeronave.nome,
      ano: aeronave.ano,
      marca: aeronave.marca,
      vendido: aeronave.vendido,
      descricao: aeronave.descricao,
      created: aeronave.created
    })

    if (aeronave.id) {
      this.idAeronave = aeronave.id;
      this.btnSubmit, this.tittle = "Atualizar";
    }
  }

  salvar() {
    if (this.btnSubmit == "Salvar") {
      this.service.salvar(this.form.value).subscribe(result => this.onSucess(0), error => this.onError(0));
      this.cancelar();

    } else {
      this.service.atualizar(this.idAeronave, this.form.value).subscribe(result => this.onSucess(1), error => this.onError(1));
      this.cancelar();
    }
  }

  cancelar() {
    this.location.back();
  }

  private onError(flag: number) {
    this.snackBar.open('Erro ao ' + (flag == 0 ? 'salvar' : 'atualizar') + ' Aeronave', '', { duration: 5000 });
  }

  private onSucess(flag: number) {
    this.snackBar.open('Aeronave ' + (flag == 0 ? 'salva' : 'atualizada') + ' com sucesso.', '', { duration: 5000 });
  }


}
