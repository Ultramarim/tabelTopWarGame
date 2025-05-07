import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Table } from '../common/mision';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMisionesService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl = "http://localhost:3000/api/"
  constructor() { }

  getMisiones() {
    return this.http.get<Table[]>(this.baseUrl + "table");
  }


}

