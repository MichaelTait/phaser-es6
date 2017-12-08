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
    this.load.atlas('ball', 'src/assets/images/spriteSheet.png', 'src/assets/images/spriteSheet.json')
    this.load.image('logo', 'src/assets/images/logo.png')
    this.load.image('brick', 'src/assets/images/brick.png');
    this.load.image('paddle', 'src/assets/images/paddle.png');
  }

  create() {

    var backgroundImage = game.add.sprite(130, 300, 'logo');
    backgroundImage.scale.setTo(0.8, 0.8);

    this.ball = new Ball(this.game, this.game.world.centerX, this.game.world.centerY, 'ball');
    this.game.stage.addChild(this.ball);

    this.brick = new Brick(this.game, this.game.world.centerX, this.game.world.centerY, 'brick');
    this.game.stage.addChild(this.brick);

    this.paddle = new Paddle(this.game, this.game.world.centerX, this.game.world.centerY, 'paddle');
    this.game.stage.addChild(this.paddle);

    var score = this.add.text(32, this.game.height - 32, 'score: 0', {font: "20px Arial", fill: "#ffffff", align: "left"})
    var lives = this.add.text(this.game.width - 96, this.game.height - 32, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });

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