import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nueva-partida',
  imports: [ FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nueva-partida.component.html',
  styleUrl: './nueva-partida.component.css'
})
export class NuevaPartidaComponent {

  nombrejugadoruno: string = '';
nombrejugadordos: string = '';
PuntosEjercitoUno: number = 0;
PuntosEjercitoDos: number = 0;

}
