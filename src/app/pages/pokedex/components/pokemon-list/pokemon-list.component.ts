import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { INamedResource } from '../../models/PokeAPI/INamedResource';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../../../../services/helper.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  originalCreatures: INamedResource[];
  filteredCreatures: INamedResource[];
  searchString: string = '';

  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute,
    public helperService: HelperService
  ) {}

  ngOnInit(): void {
    // Access route resolver data with ActivatedRoute
    this.route.data.subscribe((data) => {
      this.originalCreatures = data.creatures;
      this.filteredCreatures = this.originalCreatures;
    });
  }

  filterPokemon() {
    if (!!this.searchString) {
      this.filteredCreatures = this.originalCreatures.filter(
        (resource) =>
          resource.name.toLowerCase().indexOf(this.searchString.toLowerCase()) >
          -1
      );
    } else {
      this.filteredCreatures = this.originalCreatures;
    }
  }
}
