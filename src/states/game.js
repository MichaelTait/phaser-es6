import Phaser from 'phaser';
import WebFont from 'webfontloader';
import Ball from '../components/ball';
import Block from '../components/Blocks/block';
import Paddle from '../components/Blocks/paddle';

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
    this.load.image('ball', 'src/assets/images/ball1.png');
    // this.load.image('ball2', 'src/assets/images/ball2.png');
    // this.load.image('ball3', 'src/assets/images/ball3.png');
    // this.load.image('ball4', 'src/assets/images/ball4.png');
    this.load.image('block', 'src/assets/images/block.png');
    this.load.image('paddle', 'src/assets/images/paddle.png');
  }

  create() {
    this.ball = new Ball(this.game, this.game.world.centerX, this.game.world.centerY, 'ball');
    this.game.stage.addChild(this.ball);

    this.block = new Block(this.game, this.game.world.centerX, this.game.world.centerY, 'block');
    this.game.stage.addChild(this.block);

    this.paddle = new Paddle(this.game, this.game.world.centerX, this.game.world.centerY, 'paddle');
    this.game.stage.addChild(this.paddle);
  }

  update(){
    this.game.physics.arcade.collide(this.ball, this.paddle, this.ball.hitPaddle.bind(this.ball, this.paddle), null, this);
  }
  
  render() {
    if (this.fontsReady) {
    }
  }
}