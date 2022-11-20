import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    private adversaries: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  static rollDice(): number {
    return getRandomInt(1, 6);
  }

  playRound(enemy: Fighter | SimpleFighter): void {
    const playerOneRoll = PVE.rollDice();
    const adversaryRoll = PVE.rollDice();
    if (playerOneRoll > adversaryRoll) {
      this.player.attack(enemy);
      this.player.levelUp();
    }
    if (playerOneRoll < adversaryRoll) {
      enemy.attack(this.player);
    }
  }

  matchUp(enemy: Fighter | SimpleFighter): number {
    while (this.player.lifePoints > 0 
      && enemy.lifePoints > 0) {
      this.playRound(enemy);
    }
    return super.fight();
  }

  fight(): number {
    for (let i = 0; i < this.adversaries.length; i += 1) {
      const matchUpResult = this.matchUp(this.adversaries[i]);
      if (matchUpResult === -1) {
        break;
      }
    }
    return super.fight();
  }
}