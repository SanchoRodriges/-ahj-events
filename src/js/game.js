export default class Game {
  constructor(stats) {
    this.gameStats = stats;
    this.cell = 4;
    this.gameWrapper = document.querySelector('.game-wrapper');
    this.goodClick = false;
    this.init();
    this.goblinCreate();
    this.goblinMove();
  }

  init() {
    let e = 1;

    for (let i = 0; i < this.cell; i++) {
      const row = document.createElement('div');
      row.classList.add('game-row');
      this.gameWrapper.append(row);

      for (let o = 0; o < this.cell; o++) {
        const cell = document.createElement('div');
        cell.classList.add('game-cell');
        cell.dataset.id = e;
        row.append(cell);
        e++;
      }
    }
  }

  goblinCreate() {
    const goblin = document.createElement('div');
    goblin.classList.add('goblin');
    this.randomCell();
    const cell = this.gameWrapper.querySelector(`[data-id="${this.randId}"]`);
    this.goblin = goblin;
    cell.append(goblin);
  }

  goblinMove() {
    this.interval = setTimeout(() => {
      this.goblin.remove();
      this.goblinCreate();
      if (!this.goodClick) {
        this.gameStats.setMiss();
      }
      this.goodClick = false;
      this.goblinMove();
    }, 1000);
  }

  randomCell() {
    const min = 1;
    const max = this.cell * this.cell;
    const randId = Math.floor(Math.random() * (max - min + 1) + min);
    if (this.randId !== randId) {
      this.randId = randId;
    } else {
      this.randomCell();
    }
  }

}
