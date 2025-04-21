import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

 protected nombrejugadoruno: string = '';
 protected nombrejugadordos: string = '';

 

 setNombre(nombre: string, nombre2: string) {
   this.nombrejugadoruno = nombre;
   this.nombrejugadordos = nombre2;
 }

 getNombre() {
   return this.nombrejugadoruno;
   
 }

 getNombreDos() {
   return this.nombrejugadordos;
   
 }

 
 private selectedOption: string = '';
 private selectedOption2: string = '';

 setOption(option: string): void {
   this.selectedOption = option;
 }

 setOption2(option2: string): void {
  this.selectedOption2 = option2;
}

 getOption(): string {
   return this.selectedOption;
 }

 getOption2(): string {
  return this.selectedOption2;
}
 

PuntosVictoriaUno: number = 0;
PuntosVictoriaDos: number = 0;


setPuntos(Puntos: number): void {
  this.PuntosVictoriaUno = Puntos;
}

setPuntos2(Puntos2: number): void {
  this.PuntosVictoriaDos = Puntos2;
}

getPuntosUno() {
  return this.PuntosVictoriaUno;
  
}

getPuntosDos() {
  return this.PuntosVictoriaDos;
  
}

private imagenUrl: string | ArrayBuffer | null = '';

  setImagen(url: string | ArrayBuffer | null): void {
    this.imagenUrl = url;
  }

  getImagen(): string | ArrayBuffer | null {
    return this.imagenUrl;
  }


  protected nombre: string = '';


 setNombrePerfil(nombre: string) {
   this.nombrejugadoruno = nombre;

 }

 getNombrePerfil() {
   return this.nombrejugadoruno;
   
 }


 

}






