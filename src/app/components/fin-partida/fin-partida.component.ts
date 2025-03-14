import { Component } from '@angular/core';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-fin-partida',
  imports: [],
  templateUrl: './fin-partida.component.html',
  styleUrl: './fin-partida.component.css'
})
export class FinPartidaComponent {
  nombrejugadoruno: string = '';
  nombrejugadordos: string = '';


constructor(private playerService: PlayersService ) {}

ngOnInit() {
  this.nombrejugadoruno = this.playerService.getNombre();
  this.nombrejugadordos = this.playerService.getNombreDos();
}

}
