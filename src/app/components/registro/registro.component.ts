import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser"
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope"
@Component({
  selector: 'app-registro',
  imports: [RouterLink, RouterLinkActive, FaIconComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {


  protected readonly faUser = faUser;
  protected readonly faKey = faKey;
  protected readonly faEnvelope = faEnvelope;
}


