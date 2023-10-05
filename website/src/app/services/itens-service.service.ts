import { Injectable } from '@angular/core';
import { Item } from '../interfaces/Item';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItensServiceService {
  private apiUrl = "http://localhost:3100/itens";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]>{
    return this.http.get<Item[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Item>{
    const target = "/" + id;
    return this.http.get<Item>(this.apiUrl + "/" + id)
  }
}
