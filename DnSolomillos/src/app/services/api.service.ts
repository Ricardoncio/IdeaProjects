import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AllMonsters, Monster} from '../models/monsterModel';
import {map, Observable} from 'rxjs';

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

  getMonstersByName(query:string):Observable<Monster[]> {
    return this.getMonsters().pipe(
      map((monsters: AllMonsters) =>
        monsters.results.filter(monster => monster.name.includes(query))
      )
    );
  }
}
