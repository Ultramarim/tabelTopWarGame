import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-partida-creada',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './partida-creada.component.html',
  styleUrl: './partida-creada.component.css'
})

export class PartidaCreadaComponent {
  nombrejugadoruno: string = '';
  nombrejugadordos: string = '';
  PuntosComandoUno: number = 0;
  PuntosVictoriaUno: number = 0;
  PuntosComandoDos: number = 0;
  PuntosVictoriaDos: number = 0;
  PuntosRonda: number = 0;
  misionPrincipal: string = '';
  misionSecundaria: string = '';
    misionSecundaria2: string = '';
ngModel: any;


constructor(private playerService: PlayersService ) {}

setPuntos(puntos: number): void {
  this.PuntosVictoriaUno = puntos;
  this.playerService.setPuntos(puntos);
}

setPuntos2(puntos2: number): void {
  this.PuntosVictoriaDos = puntos2;
  this.playerService.setPuntos2(puntos2);
}


ngOnInit() {
  this.nombrejugadoruno = this.playerService.getNombre();
  this.nombrejugadordos = this.playerService.getNombreDos();
}



}