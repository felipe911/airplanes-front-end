import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeronavesComponent } from './aeronaves/aeronaves.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', component: AeronavesComponent },
  { path: 'adicionar', component: FormularioComponent },
  { path: 'editar/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeronavesCrudRoutingModule { }
