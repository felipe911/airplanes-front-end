import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AeronavesCrudRoutingModule } from './aeronaves-crud-routing.module';
import { AeronavesComponent } from './aeronaves/aeronaves.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AeronavesComponent
  ],
  imports: [
    CommonModule,
    AeronavesCrudRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AeronavesCrudModule { }
