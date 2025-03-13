import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

 protected nombrejugadoruno: string = '';

 setNombre(nombre: string) {
   this.nombrejugadoruno = nombre;
 }

 getNombre() {
   return this.nombrejugadoruno;
 }

 
}
