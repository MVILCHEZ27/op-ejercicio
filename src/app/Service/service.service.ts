import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/characters';
  UrlBitacora = 'http://localhost:8080/bitacora';

  getAllCharacters():Observable<any>{
    return this.http.get<any>(this.Url).pipe(map((data:any)=>data.data.results));
  }

  getCharacter(id: string):Observable<any>{

    return this.http.get(`http://localhost:8080/character?id=${id}`).pipe(map((data:any)=>data.data.results));

  }

  getBitacora():Observable<any>{
    return this.http.get(this.UrlBitacora).pipe(map((data:any)=>data));

  }
  
}
