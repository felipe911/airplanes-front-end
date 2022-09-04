import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeronavesComponent } from './aeronaves/aeronaves.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AeronaveResolver } from './guards/aeronave.resolver';

const routes: Routes = [
  { path: '', component: AeronavesComponent },
  { path: 'adicionar', component: FormularioComponent, resolve: { aeronave: AeronaveResolver }  },
  { path: 'editar/:id', component: FormularioComponent, resolve: { aeronave: AeronaveResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeronavesCrudRoutingModule { }
