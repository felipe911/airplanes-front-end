import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AeronavesCrudRoutingModule } from './aeronaves-crud-routing.module';
import { AeronavesComponent } from './aeronaves/aeronaves.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormularioComponent } from './formulario/formulario.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AeronavesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    AeronavesCrudRoutingModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class AeronavesCrudModule { }
