import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiButton, TuiRoot } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
