import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  imports: [],
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {

imagen: string | ArrayBuffer | null = '';

onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
   reader.onload = (e) => {
    this.imagen = e.target?.result ?? null;
   };
   reader.readAsDataURL(file);
  }


}
}
