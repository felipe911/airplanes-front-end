import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { VendasPipe } from './pipes/vendas.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    VendasPipe
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ErrorDialogComponent,
    VendasPipe]
})
export class SharedModule { }
