import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  option: any;
  positions: any[] = ['Programmer', 'Businness Analyst', 'Designer', 'DBA'];

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nome: [null],
      ano: [null],
      marca: [null],
      vendido: [null]
    });
   }

  ngOnInit(): void {
  }

  salvar(){

  }

  cancelar(){
    
  }

}
