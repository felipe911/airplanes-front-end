import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeronavesComponent } from './aeronaves/aeronaves.component';

const routes: Routes = [
  { path: '', component: AeronavesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeronavesCrudRoutingModule { }
