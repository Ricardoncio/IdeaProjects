import {Component, output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MonsterComponent} from './components/monster/monster.component';
import {HttpClientModule} from '@angular/common/http';
import {LibraryComponent} from './library/library.component';
import {HeaderComponent} from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonsterComponent, HttpClientModule, LibraryComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

