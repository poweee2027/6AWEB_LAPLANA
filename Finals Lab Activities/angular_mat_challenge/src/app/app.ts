import { Component } from '@angular/core';
import { PokemonRegisterComponent } from './pokemon-register/pokemon-register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonRegisterComponent],
  templateUrl: './app.html',
})
export class App {}