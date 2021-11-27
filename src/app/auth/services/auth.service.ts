import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/LoginResponse.model';
import { LoginRequest } from '../models/LoginRequest.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/cuentas/signin`, request)
              .pipe(
                tap(data => {
                  if (data) {
                    localStorage.setItem('token', data.token);
                  }
                }),
                map(data => data)
              );
  }
}
