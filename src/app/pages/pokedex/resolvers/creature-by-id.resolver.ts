import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/PokeAPI/IPokemon';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class CreatureByIdResolver implements Resolve<IPokemon> {
  constructor(private pokeService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPokemon> {
    return this.pokeService.getCreatureById(route.params.id);
  }
}
