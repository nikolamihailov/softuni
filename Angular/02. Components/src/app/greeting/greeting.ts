import { Component, OnChanges } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css'
})
export class Greeting {
  greetings: string[] = ["Opa", "Hola", "Hello"];
  users: User[] = [
    { id: 1, name: "Alex", age: 15 },
    { id: 2, name: "Bobi", age: 24 },
    { id: 3, name: "Clark", age: 25 },
  ];
  isOldEnough: boolean = true;
  receivedGreetings: string[] = [];
  logo: string = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg";

  
  protected name = "Koleto";

  onGreet(username: string) {
    const greeting = `Ko staa we lud - ${username}`
    this.receivedGreetings.push(greeting)
  }
}
