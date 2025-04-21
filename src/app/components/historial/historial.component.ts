import { PlayersService } from './../../services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  imports: [],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent  {

  resultados: number[] = [];

  constructor(private PlayersService: PlayersService) {}


  
  


}
