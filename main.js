/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game.js
class Game {
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
;// CONCATENATED MODULE: ./src/js/punch.js
class Punch {
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
;// CONCATENATED MODULE: ./src/js/stats.js
class Stats {
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
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here




const stats = new Stats();
const game = new Game(stats);
const punch = new Punch(game);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;