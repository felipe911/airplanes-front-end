import { Aeronave } from './../models/aeronave';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { AeronavesService } from '../services/aeronaves.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aeronaves',
  templateUrl: './aeronaves.component.html',
  styleUrls: ['./aeronaves.component.css']
})
export class AeronavesComponent implements OnInit {

  aeronaves$: Observable<Aeronave[]>;

  constructor(

    private aeronavesService : AeronavesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,

    ) { 
      
    this.aeronaves$ = this.aeronavesService.listarAeronaves().pipe(
      catchError(error => {
        this.onError('Erro ao carregar as Aeronaves');
      return of([])
    }));

  }

  ngOnInit(): void {
    
  }


  adicionarAeronave(){
    this.router.navigate(['adicionar'], {relativeTo: this.route})
  }

  editarAeronave(aeronave: Aeronave){
    this.router.navigate(['editar', aeronave.id], {relativeTo: this.route})
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg});
  }

}
