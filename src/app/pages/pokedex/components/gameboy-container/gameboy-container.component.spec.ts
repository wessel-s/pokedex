import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboyContainerComponent } from './gameboy-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PokedexModule } from '../../pokedex.module';
import { AppModule } from '../../../../app.module';

describe('GameboyContainerComponent', () => {
  let component: GameboyContainerComponent;
  let fixture: ComponentFixture<GameboyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, PokedexModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
