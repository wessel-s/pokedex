import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INamedResource } from './models/PokeAPI/INamedResource';
import { PokemonService } from './services/pokemon.service';
import { HelperService } from '../../services/helper.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  activeType: string | null;
  types$: Observable<INamedResource[]>;

  constructor(
    private pokeService: PokemonService,
    private helperService: HelperService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeType = this.helperService.getLastPathFromURL(
          document.location.href
        );
      });
  }

  ngOnInit(): void {
    this.types$ = this.pokeService.getAllTypes();
  }
}
