import { Injectable } from '@angular/core';
import { Users } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usersURL =  'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  ObsUsuarios(): Observable<Users[]>{
    return this.http.get<Users[]>(this.usersURL);
  }
}
