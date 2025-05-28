import { PlayersService } from './../../services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  imports: [],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent  {

  nombrejugadoruno: string = '';
  nombrejugadordos: string = '';
  selectedOption: string = '';
  selectedOption2: string = '';
  PuntosVictoriaUno: number = 0;
  PuntosVictoriaDos: number = 0;
  ganador: string = '';

constructor(private playerService: PlayersService ) {}

ngOnInit() {
  this.nombrejugadoruno = this.playerService.getNombre();
  this.nombrejugadordos = this.playerService.getNombreDos();
  this.selectedOption = this.playerService.getOption();
this.selectedOption2 = this.playerService.getOption2();
this.PuntosVictoriaUno = this.playerService.getPuntosUno();
this.PuntosVictoriaDos = this.playerService.getPuntosDos();


this.calcularGanador();
}

calcularGanador(): void {
  if (this.PuntosVictoriaUno > this.PuntosVictoriaDos) {
    this.ganador = `¡El ganador es!: ${this.nombrejugadoruno} con la faccion:  ${this.selectedOption}`;
  } else if (this.PuntosVictoriaDos > this.PuntosVictoriaUno) {
    this.ganador = `¡El ganador es!: ${this.nombrejugadordos} con la faccion:  ${this.selectedOption2}`;
  } else {
    this.ganador = '¡Empate!';
  }
}

resultado: string = ''; 

  
}
