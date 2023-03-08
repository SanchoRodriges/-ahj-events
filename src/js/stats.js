export default class Stats {
  constructor() {
    this.gameStats = document.querySelector('.game-stats');
    this.getText = this.gameStats.querySelector('.game-stats-get');
    this.missText = this.gameStats.querySelector('.game-stats-miss');
    this.miss = 0;
    this.get = 0;

    this.init();
  }

  init() {
    this.getText.textContent = this.get;
    this.missText.textContent = this.miss;
  }

  setСatch() {
    this.get++;
    this.init();
  }

  setMiss() {
    this.miss++;
    if (this.miss > 5) {
      this.miss = 0;
      this.get = 0;
    }
    this.init();
  }
}
