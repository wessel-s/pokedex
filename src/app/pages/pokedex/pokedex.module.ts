import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { GameboyContainerComponent } from './components/gameboy-container/gameboy-container.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CreaturesResolver } from './resolvers/creatures.resolver';
import { CreaturesByTypeResolver } from './resolvers/creatures-by-type.resolver';
import { CreatureByIdResolver } from './resolvers/creature-by-id.resolver';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonDetailsComponent,
    PokemonListComponent,
    GameboyContainerComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [
    PokemonService,
    CreaturesResolver,
    CreaturesByTypeResolver,
    CreatureByIdResolver,
  ],
})
export class PokedexModule {}
