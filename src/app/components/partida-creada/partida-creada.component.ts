import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-partida-creada',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './partida-creada.component.html',
  styleUrl: './partida-creada.component.css'
})

export class PartidaCreadaComponent {
  PuntosComandoUno: number = 0;
  PuntosVictoriaUno: number = 0;
  PuntosComandoDos: number = 0;
  PuntosVictoriaDos: number = 0;
}

const routes: Routes = [
  {path: '', component: PartidaCreadaComponent},
  {path: 'partida-creada', component: PartidaCreadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }