import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'aeronaves-crud' },
  { path: '',
    loadChildren: () => import('./aeronaves-crud/aeronaves-crud.module').then(m => m.AeronavesCrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
