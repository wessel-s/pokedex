import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { PokedexModule } from '../../pokedex.module';
import { AppModule } from '../../../../app.module';
import { mockPokemon } from '../../models/PokeAPI/mockData/pokemon.mock';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, PokedexModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render at least one img', () => {
    component.pokemon = mockPokemon;
    fixture.detectChanges();
    const el = fixture.debugElement.query(
      By.css('.pokemon__sprites img:first-child')
    ).nativeElement;
    expect(el['src']).toContain('https://raw.githubusercontent.com');
  });
});
