import { Component,OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AllMonsters, Monster} from '../../models/monsterModel';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-monster',
  standalone: true,
    imports: [
        ScrollingModule
    ],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit{
    monsters:Monster[] = [];
    // selectedMonster: Monster | null = null;

  constructor(private api:ApiService) {

  }

  ngOnInit(): void {
    this.api.getMonsters().subscribe((response:AllMonsters) => {
      this.monsters = response.results;
    })
  }

    // getMonsterByIndex(index:string) {
    //   return this.api.getMonstersByIndex(index);
    // }
}
