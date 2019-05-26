import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  motivo: number;
  des_motivo:string;
  estado: string;
  tipo: string;

  /*pruebassss*/
  apellidos: string;
  correo: string;
  edad: string;
  fecha_registro: string;
  id: number;
  nombres: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiEndpoint = "http://localhost/victoralvarado/DetektorCrud/PhpCrudProject/Crud/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiEndpoint}getReg.php`);
  }

  createUser(formData): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiEndpoint}insertReg.php`, formData, {headers});
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}deleteReg.php?motivo=${id}`);
  }

  updateUser(formData): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.apiEndpoint}updateReg.php`, formData, {headers});
  }
}
