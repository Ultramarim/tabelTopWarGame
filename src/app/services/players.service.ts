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
 
}
