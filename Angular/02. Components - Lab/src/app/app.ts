import { Component } from '@angular/core';
import { Articles } from './articles/articles';

@Component({
  selector: 'app-root',
  imports: [Articles],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Article Site';
}
