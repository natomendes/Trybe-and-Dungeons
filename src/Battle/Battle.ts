import Fighter from '../Fighter';

class Battle {
  constructor(protected player: Fighter) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    console.log(this.player.lifePoints);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
