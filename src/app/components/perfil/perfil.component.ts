import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent  {


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
