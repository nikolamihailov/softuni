import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app';
}
