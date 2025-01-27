import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MonsterComponent} from './components/monster/monster.component';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonsterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DnSolomillos'
}

