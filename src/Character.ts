import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import newElf from './Factories/Elf-factory';
import Fighter, { SimpleFighter } from './Fighter';
import Race from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter, SimpleFighter {
  private _maxLifePoints: number = this._race.maxLifePoints / 2;
  private _lifePoints: number = this._maxLifePoints;
  private _strength: number = getRandomInt(1, 10);
  private _defense: number = getRandomInt(1, 10);
  private _dexterity: number = this._race.dexterity;
  private _energy: Energy = {
    type_: this._archetype.energyType,
    amount: getRandomInt(1, 10),
  };

  constructor(
    name: string,
    private readonly _race: Race = newElf(name),
    private readonly _archetype: Archetype = new Mage(name),
  ) {}

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints < -1) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}