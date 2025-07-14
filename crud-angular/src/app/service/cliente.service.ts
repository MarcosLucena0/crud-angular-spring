import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //URL da API
  private url:string = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  //metodo para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //metodo para cadastrar cliente
  cadastrar(obj: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj);
  }

  //metodo de edição de clientes
  editar(obj: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, obj);
  }

  //metodo de remoção de clientes
  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + id);
  }

}
