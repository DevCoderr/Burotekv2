import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvrakService {

  private apiUrl = 'https://localhost:7260'; // API URL'nizi buraya ekleyin

  constructor(private http: HttpClient) { }

  get(endpoint: string): Observable<any> {
    console.log()
    return this.http.get<any>(`${this.apiUrl}/${endpoint}`);
  }
}
