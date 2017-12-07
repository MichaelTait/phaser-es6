import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/boot';

class Game extends Phaser.Game {
  constructor() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    super(width, height, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.start('Boot');
  }
}

window.game = new Game;