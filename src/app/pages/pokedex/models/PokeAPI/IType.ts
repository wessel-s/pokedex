export interface IType {
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: Generation;
  id: number;
  move_damage_class: Generation;
  moves: Generation[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: Pokemon[];
}

interface DamageRelations {
  double_damage_from: Generation[];
  double_damage_to: any[];
  half_damage_from: any[];
  half_damage_to: Generation[];
  no_damage_from: Generation[];
  no_damage_to: Generation[];
}

interface Generation {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  generation: Generation;
}

interface Name {
  language: Generation;
  name: string;
}

interface Pokemon {
  pokemon: Generation;
  slot: number;
}
