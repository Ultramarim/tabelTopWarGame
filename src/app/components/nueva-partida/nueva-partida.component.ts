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
selectedOption: string = 'Selecciona una opción';
selectedOption2: string = 'Selecciona una opción';

onSelect(option: string): void {
  this.selectedOption = option;
  this.playerService.setOption(option);
}

onSelect2(option2: string): void {
  this.selectedOption2 = option2;
  this.playerService.setOption2(option2);
}

savePlayers() {
this.playerService.setNombre(this.nombrejugadoruno, this.nombrejugadordos);
}

}
