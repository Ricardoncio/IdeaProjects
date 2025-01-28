import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AllMonsters, Monster} from '../models/monsterModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://www.dnd5eapi.co/api/';

  constructor(private httpClient:HttpClient) {

  }

  getMonsters() {
    return this.httpClient.get<AllMonsters>(this.url + 'monsters');
  }

  // getMonstersByIndex(index:string):Observable<Monster> {
  //   return this.httpClient.get<Monster>(this.url + 'monsters/' + index);
  // }
}
