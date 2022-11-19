import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    protected playerOne: Fighter,
    private playerTwo: Fighter,
  ) {
    super(playerOne);
  }

  static rollDice(): number {
    return getRandomInt(1, 6);
  }

  playRound(): void {
    const playerOneRoll = PVP.rollDice();
    const playerTwoRoll = PVP.rollDice();
    if (playerOneRoll > playerTwoRoll) {
      this.playerOne.attack(this.playerTwo);
      this.playerOne.levelUp();
    }
    if (playerOneRoll < playerTwoRoll) {
      this.playerTwo.attack(this.playerOne);
      this.playerTwo.levelUp();
    }
  }

  fight(): number {
    while (this.playerOne.lifePoints > -1
        && this.playerTwo.lifePoints > -1) {
      this.playRound();     
      console.log('SuperLife: ', this.playerOne.lifePoints);
      console.log('SubLife: ', this.playerTwo.lifePoints);
    }
    return super.fight();
  }
}