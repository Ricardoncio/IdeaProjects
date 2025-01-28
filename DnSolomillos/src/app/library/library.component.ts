import { Component } from '@angular/core';
import {MonsterComponent} from '../components/monster/monster.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [MonsterComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

}
