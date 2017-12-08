import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/boot';
import GameState from './states/game';
import WinState from './states/win';

class Game extends Phaser.Game {
  constructor() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    super(width, height, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Game', GameState, false);
    this.state.add('Win', WinState, false);
    this.state.start('Boot');
  }
}

window.game = new Game;