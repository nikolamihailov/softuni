import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from './greeting/greeting';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greeting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'components';
}
