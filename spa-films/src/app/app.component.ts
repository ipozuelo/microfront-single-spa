import { Component, OnInit } from '@angular/core';
import { ApiFilmsService } from './services/api-films.service';
import { Movie } from './interfaces/peliculas.interface';
import { PokeService } from './services/api-poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spa-films';
  movies: Movie[] = [];

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    console.log(this.pokeService.getPokemon());
  }
}
