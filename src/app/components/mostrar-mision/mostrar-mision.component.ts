import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiMisionesService } from '../../services/api-misiones.service';
import { Table } from '../../common/mision';

@Component({
  imports: [
    CommonModule,
    NgbModalModule,
    
  ],
  templateUrl: './mostrar-mision.component.html',
  styleUrl: './mostrar-mision.component.css'
})
export class MostrarMisionComponent {
private readonly misionService: ApiMisionesService = inject(ApiMisionesService);

misiones: Table[] = [];


constructor() {
this.loadMisions();
  }

  private loadMisions() {
    this.misionService.getMisiones().subscribe(
      {
        next: value => {
          console.log(value);
          this.misiones = value;
        },
        error: err => {
          console.error('Error al cargar misiones', err);
        },
        complete: () => {
          console.log('Carga de misiones completada');
        }
      }
    );
  }
}
