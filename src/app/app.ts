import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Middle } from "./components/middle/middle";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Middle, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'stock';
}
