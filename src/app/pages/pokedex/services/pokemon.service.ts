import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { INamedResource } from '../models/PokeAPI/INamedResource';
import { IPokemon } from '../models/PokeAPI/IPokemon';
import { INamedResourceList } from '../models/PokeAPI/INamedResourceList ';
import { IType } from '../models/PokeAPI/IType';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiURL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getAllCreatures(): Observable<INamedResource[]> {
    return this.http
      .get<INamedResourceList>(`${this.apiURL}/pokemon?limit=2000`)
      .pipe(
        map((namedResourceList) => namedResourceList.results),
        shareReplay()
      );
  }

  getCreatureById(id: string): Observable<IPokemon> {
    return this.http
      .get<IPokemon>(`${this.apiURL}/pokemon/${id}`)
      .pipe(shareReplay());
  }

  getCreaturesByType(type: string): Observable<INamedResource[]> {
    return this.http.get<IType>(`${this.apiURL}/type/${type}`).pipe(
      map((type) => {
        const resourceList: INamedResource[] = [];
        type.pokemon.map((obj: { pokemon: INamedResource }) => {
          resourceList.push(obj.pokemon);
        });
        return resourceList;
      }),
      shareReplay()
    );
  }

  getAllTypes(): Observable<INamedResource[]> {
    return this.http.get<INamedResourceList>(`${this.apiURL}/type`).pipe(
      map((namedResourceList) => namedResourceList.results),
      map((types) =>
        types.filter(
          (type) => type.name !== 'unknown' && type.name !== 'shadow'
        )
      ),
      shareReplay()
    );
  }
}
