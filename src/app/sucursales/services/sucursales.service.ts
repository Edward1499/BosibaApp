import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRlbW8xQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJkZW1vMUBnbWFpbC5jb20iLCJqdGkiOiIzZjJhNzNkMi04MzQwLTQ0ODUtYmNjZS1hMGYzZWRjN2QyYjMiLCJleHAiOjE2MzgwNjMxOTl9.9XzuY9-o-jQmjmEREF5tjRqsTv85f2__rmJMSRPlHVU')
    return this.http.post<ListadoSucursal[]>(`${this.apiUrl}/BusinessUnit/BusinessUnitEnterprise`, request, { headers })
  }
}
