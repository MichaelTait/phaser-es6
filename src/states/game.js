import Phaser from 'phaser';
import WebFont from 'webfontloader';
import Ball from '../components/ball';
import Brick from '../components/Blocks/brick';
import Paddle from '../components/Blocks/paddle';

export default class extends Phaser.State {
  constructor() {
    super();
    this.fontsReady = false;
    this.wallLength = 10;
    this.wallHeight = 4;
    this.bricks = [];
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
    this.load.image('ball', 'src/assets/images/ball.png');
    this.load.image('brick', 'src/assets/images/brick.png');
    this.load.image('paddle', 'src/assets/images/paddle.png');
  }

  create() {
    this.ball = new Ball(this.game, this.game.world.centerX, this.game.world.centerY, 'ball');
    this.game.stage.addChild(this.ball);

    this.brick = new Brick(this.game, this.game.world.centerX, this.game.world.centerY, 'brick');
    this.game.stage.addChild(this.brick);

    this.paddle = new Paddle(this.game, this.game.world.centerX, this.game.world.centerY, 'paddle');
    this.game.stage.addChild(this.paddle);

    for (let i = 0; i < this.wallLength; i++) {
      for (let x = 0; x < this.wallHeight; x++) {
        const padding = 80;
        const maxHeight = window.innerWidth / 5;
        const maxWidth = window.innerWidth;

        const positionX = (maxWidth / this.wallLength  * i) + padding;
        const positionY = (maxHeight / this.wallHeight * x) + padding;

        const brick = new Brick(this.game, positionX, positionY, 'brick');
        this.game.stage.addChild(brick);
      }
    }
  }

  update(){
    this.game.physics.arcade.collide(this.ball, this.paddle, this.ball.hitPaddle.bind(this.ball, this.paddle), null, this);
  }
  
  render() {
    if (this.fontsReady) {
    }
  }
}