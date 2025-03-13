import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser"
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey"
@Component({
  selector: 'app-inicio-de-sesion',
  imports: [RouterLink, RouterLinkActive, FaIconComponent],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrl: './inicio-de-sesion.component.css'
})
export class InicioDeSesionComponent {


  protected readonly faUser = faUser;
  protected readonly faKey = faKey;
}
