import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { INamedResource } from '../models/PokeAPI/INamedResource';

@Injectable({
  providedIn: 'root',
})
export class CreaturesResolver implements Resolve<INamedResource[]> {
  constructor(private pokeService: PokemonService) {}

  resolve(): Observable<INamedResource[]> {
    return this.pokeService.getAllCreatures();
  }
}
