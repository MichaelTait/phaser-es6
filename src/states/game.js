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
    this.load.image('ball', 'src/assets/images/ball.png');
    this.load.image('block', 'src/assets/images/block.png');
    this.load.image('paddle', 'src/assets/images/paddle.png');
  }
    
  create() {
    this.ball = new Ball(this.game, this.game.world.centerX, this.game.world.centerY, 'ball');
    this.game.stage.addChild(this.ball);

    this.block = new Block(this.game, this.game.world.centerX, this.game.world.centerY, 'block');
    this.game.stage.addChild(this.block);

    this.paddle = new Paddle(this.game, this.game.world.centerX, this.game.world.centerY + 500, 'paddle');
    this.game.stage.addChild(this.paddle);
    this.game.physics.enable(this.paddle, Phaser.Physics.ARCADE);

  }

  update(){
    this.game.physics.arcade.collide(this.ball, this.paddle, this.ball.hitPaddle, null, this);
    }
  
  render() {
    if (this.fontsReady) {
    }
  }
}