import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { CreaturesResolver } from './resolvers/creatures.resolver';
import { CreaturesByTypeResolver } from './resolvers/creatures-by-type.resolver';
import { CreatureByIdResolver } from './resolvers/creature-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    children: [
      {
        path: '',
        component: PokemonListComponent,
        resolve: {
          creatures: CreaturesResolver,
        },
      },
      {
        path: 'type/:type',
        component: PokemonListComponent,
        resolve: {
          creatures: CreaturesByTypeResolver,
        },
      },
      {
        path: 'details/:id',
        component: PokemonDetailsComponent,
        resolve: {
          creature: CreatureByIdResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
