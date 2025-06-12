import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Tabs } from './tabs/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'weight-tracker';
}
