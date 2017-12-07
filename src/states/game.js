import Phaser from 'phaser';
import WebFont from 'webfontloader';
import Ball from '../components/ball';

export default class extends Phaser.State {
  constructor() {
    super();
    this.fontsReady = false;
  }

  init() {
    //Set the main background colour of the scene.
    this.stage.backgroundColour = '#ff00ff';
  }

  preload() {
    this.load.image('ball', 'src/assets/images/ball.png');
  }

  create() {
    this.ball = new Ball(this.game, this.game.world.centerX, this.game.world.centerY, 'ball');
    this.game.stage.addChild(this.ball);
  }

  update(){
    this.game.physics.arcade.collide(this.ball, this.paddle, this.ball.hitPaddle, null, this);
  }
  
  render() {
    if (this.fontsReady) {
    }
  }
}