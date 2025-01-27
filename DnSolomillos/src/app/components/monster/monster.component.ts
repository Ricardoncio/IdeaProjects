import { Component,OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AllMonsters, Monster} from '../../models/monsterModel';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit{
  monsters:Monster[] = [];

  constructor(private api:ApiService) {

  }

  ngOnInit(): void {
    this.api.getMonsters().subscribe((response:AllMonsters) => {
      this.monsters = response.results;
    })
  }

  protected readonly ApiService = ApiService;
}
