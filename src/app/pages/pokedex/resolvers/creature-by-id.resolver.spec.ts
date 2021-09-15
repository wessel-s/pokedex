import { TestBed } from '@angular/core/testing';

import { CreatureByIdResolver } from './creature-by-id.resolver';
import { PokedexModule } from '../pokedex.module';
import { AppModule } from '../../../app.module';

describe('CreatureByIdResolver', () => {
  let resolver: CreatureByIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, PokedexModule],
    });
    resolver = TestBed.inject(CreatureByIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
