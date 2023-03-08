export default class Punch {
  constructor(game) {
    this.game = game;
    this.gameStats = game.gameStats;
    this.gameWrapper = document.querySelector('.game-wrapper');
    this.gameWrapper.addEventListener('click', this.click.bind(this));
  }

  click(e) {
    if (e.target.classList.contains('goblin')) {
      this.gameStats.setСatch();
      clearInterval(this.game.interval);
      this.game.goodClick = true;
      this.game.goblin.remove();
      this.game.goblinMove();
    } else {
      this.gameStats.setMiss();
    }
  }
}
