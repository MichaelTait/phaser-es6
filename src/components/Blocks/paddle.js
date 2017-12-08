import Block from './block';
import { paddle } from '../../assets/index';

export default class extends Block {
    constructor(phaserGame, x, y, asset) {
      super(phaserGame, x, y, asset);
      this.height = 30;
      this.width = 150;
  }

    update() {
        this.x = this.game.input.x;
        const paddleWidth = this.width / 2;
        const spaceLeft = window.innerWidth - paddleWidth;
        if (this.x < paddleWidth) {
            this.x = paddleWidth;
        }
        if (this.x > window.innerWidth - paddleWidth) {
            this.x = window.innerWidth - paddleWidth;
        }
    }
}   