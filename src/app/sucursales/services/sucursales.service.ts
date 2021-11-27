import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListadoRequest } from '../models/ListadoRequest.model';
import { ListadoSucursal } from '../models/ListadoSucursal.model';

@Injectable({
  providedIn:'root' 
})
export class SucursalesService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getListado(request: ListadoRequest): Observable<ListadoSucursal[]> {
    return this.http.post<ListadoSucursal[]>(`${this.apiUrl}/BusinessUnit/BusinessUnitEnterprise`, request);
  }
}
