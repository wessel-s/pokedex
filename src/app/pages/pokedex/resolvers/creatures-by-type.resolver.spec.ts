import { TestBed } from '@angular/core/testing';

import { CreaturesByTypeResolver } from './creatures-by-type.resolver';
import { PokedexModule } from '../pokedex.module';
import { AppModule } from '../../../app.module';

describe('CreaturesByTypeResolver', () => {
  let resolver: CreaturesByTypeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, PokedexModule],
    });
    resolver = TestBed.inject(CreaturesByTypeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
