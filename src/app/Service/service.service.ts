import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from '../Model/Character';
import { CharacterResult } from '../Model/CharacterResult';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/characters';

  getCharacters(){
    return this.http.get<CharacterResult[]>(this.Url);
  }
}
