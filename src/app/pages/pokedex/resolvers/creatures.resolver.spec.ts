import { TestBed } from '@angular/core/testing';

import { CreaturesResolver } from './creatures.resolver';
import { PokedexModule } from '../pokedex.module';
import { AppModule } from '../../../app.module';

describe('CreaturesResolver', () => {
  let resolver: CreaturesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, PokedexModule],
    });
    resolver = TestBed.inject(CreaturesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
