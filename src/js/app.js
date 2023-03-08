// TODO: write code here

import Game from './game';
import Punch from './punch';
import Stats from './stats';

const stats = new Stats();
const game = new Game(stats);
const punch = new Punch(game);
