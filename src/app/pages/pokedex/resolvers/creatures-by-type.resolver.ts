import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { INamedResource } from '../models/PokeAPI/INamedResource';

@Injectable({
  providedIn: 'root',
})
export class CreaturesByTypeResolver implements Resolve<INamedResource[]> {
  constructor(private pokeService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<INamedResource[]> {
    return this.pokeService.getCreaturesByType(route.params.type);
  }
}
