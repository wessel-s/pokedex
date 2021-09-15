import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokedex',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pokedex/pokedex.module').then((m) => m.PokedexModule),
      },
    ],
  },
  { path: '**', redirectTo: 'pokedex' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
