import { Component } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-fin-partida',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './fin-partida.component.html',
  styleUrl: './fin-partida.component.css'
})
export class FinPartidaComponent {
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
    this.ganador = `¡El ganador es!: ${this.nombrejugadoruno}`;
  } else if (this.PuntosVictoriaDos > this.PuntosVictoriaUno) {
    this.ganador = `¡El ganador es!: ${this.nombrejugadordos}`;
  } else {
    this.ganador = '¡Empate!';
  }
}

resultado: string = ''; 

}
