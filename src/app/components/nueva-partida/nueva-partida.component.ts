import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterLinkActive } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nueva-partida',
  imports: [ FormsModule, RouterLink, RouterLinkActive, NgbDropdownModule],
  templateUrl: './nueva-partida.component.html',
  styleUrl: './nueva-partida.component.css'
})
export class NuevaPartidaComponent {

  nombrejugadoruno: string = '';
nombrejugadordos: string = '';
PuntosEjercitoUno: number = 0;
PuntosEjercitoDos: number = 0;

constructor(private playerService: PlayersService) { }

savePlayers() {
this.playerService.setNombre(this.nombrejugadoruno, this.nombrejugadordos);
}
}
