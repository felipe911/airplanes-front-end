import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    descricao: ['']

  });

  constructor(

    private formBuilder: NonNullableFormBuilder,
    private service: AeronavesService,
    private snackBar: MatSnackBar,
    private location: Location

    ) {
   }

  ngOnInit(): void {
  }

  salvar(){
    this.service.salvar(this.form.value).subscribe(result => this.onSucess(), error => this.onError());
    this.cancelar();
  }
  
  cancelar(){
    this.location.back();
  }
  
  private onError(){
    this.snackBar.open('Erro ao salvar Aeronave', '', {duration: 5000});
  }

  private onSucess(){
    this.snackBar.open('Aeronave salva com sucesso.', '', {duration: 5000});
  }


}
