import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PokedexModule } from '../../pokedex.module';
import { AppModule } from '../../../../app.module';
import { By } from '@angular/platform-browser';
import { mockNamedResource } from '../../models/PokeAPI/mockData/namedResource.mock';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, PokedexModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should list Pokemon from retrieved data', () => {
    component.filteredCreatures = mockNamedResource;
    fixture.detectChanges();
    const el = fixture.debugElement.query(
      By.css('#pokemon-list > .mat-list-item:nth-of-type(3)')
    ).nativeElement;
    expect(el.textContent).toBe('Blastoise');
  });
});
