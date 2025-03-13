import { Component } from '@angular/core';
import { InicioDeSesionComponent } from '../inicio-de-sesion/inicio-de-sesion.component';
import { RegistroComponent } from '../registro/registro.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [InicioDeSesionComponent, RegistroComponent, RouterLink, RouterLinkActive],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
