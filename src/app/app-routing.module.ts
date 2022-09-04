import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './aeronaves-crud/formulario/formulario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'aeronaves-crud' },
  { path: '',
    loadChildren: () => import('./aeronaves-crud/aeronaves-crud.module').then(m => m.AeronavesCrudModule)
  },
  { path: 'editar/:id', component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
