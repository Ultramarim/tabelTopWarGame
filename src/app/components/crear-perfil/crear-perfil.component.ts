import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-crear-perfil',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './crear-perfil.component.html',
  styleUrl: './crear-perfil.component.css'
})
export class CrearPerfilComponent {

  protected nombre: string = '';

  constructor(private playerService: PlayersService) { }

  saveProfile() {
    this.playerService.setNombrePerfil(this.nombre);
    }


    imagenUrl: string | null = null;  

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
    
        const reader = new FileReader();
        reader.onload = (e) => {
         
          const blob = new Blob([reader.result as ArrayBuffer]);
          this.imagenUrl = URL.createObjectURL(blob);
        };
        
        reader.readAsArrayBuffer(file);
      }
    }

}
