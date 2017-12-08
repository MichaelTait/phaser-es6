import Phaser from 'phaser';
import WebFont from 'webfontloader';
import Ball from '../components/ball';
import Brick from '../components/Blocks/brick';
import Paddle from '../components/Blocks/paddle';

export default class extends Phaser.State {
  constructor() {
    super();
    this.fontsReady = false;
    //this.screenWidth = window.innerWidth;
    this.wallLength = Math.floor(window.innerWidth / 128);
    this.wallHeight = 4;
    this.bricks = [];
    
    this.collisionSound;
    this.deathSound;
    this.brickSound;
  }

  init() {
    //Set the main background colour of the scene.
    this.stage.backgroundColour = '#ff00ff';
    this.game.ballOnPaddle = true;
  }

  preload() {
    this.load.atlas('ball', 'src/assets/images/spriteSheet.png', 'src/assets/images/spriteSheet.json')
    this.load.image('brick', 'src/assets/images/brick.png');
    this.load.image('paddle', 'src/assets/images/paddle.png');

    this.load.audio('brickSound', 'src/assets/Audio/brickSound.wav');
    this.load.audio('collisionSound', 'src/assets/Audio/collisionSound.wav');
    this.load.audio('deathSound', 'src/assets/Audio/deathSound.wav');
    
    this.load.image('background', 'src/assets/images/background.png');
  }

  create() {
    this.deathSound = this.game.add.audio('deathSound');

    game.add.tileSprite(0,0, window.innerWidth, window.innerHeight, 'background');

    this.game.score = 0;
    this.game.scoreText = this.add.text(16, this.game.height -50, 'Score: ' + this.game.score, {
      font: '44px Arial', fill: '#efefef', align: 'center'
    });
    this.game.lives = 3;
    this.game.livesText = this.add.text(this.game.width - 175, this.game.height -50, 'Lives: ' + this.game.lives, {
      font: '44px Arial', fill: '#efefef', align: 'center'});

    this.paddle = new Paddle(this.game, this.game.world.centerX, window.innerHeight - 50, 'paddle');
    this.game.stage.addChild(this.paddle);

    this.ball = new Ball(this.game, this.paddle.x, this.paddle.y - 40, 'ball');
    this.game.stage.addChild(this.ball);

    this.ball.events.onOutOfBounds.add(this.death, this);

    for (let i = 0; i < this.wallLength; i++) {
      for (let x = 0; x < this.wallHeight; x++) {
        const padding = 60;
        const maxHeight = window.innerWidth / 5;
        const maxWidth = window.innerWidth;

        const positionX = (maxWidth / this.wallLength  * i) + padding;
        const positionY = (maxHeight / this.wallHeight * x) + padding;

        const brick = new Brick(this.game, positionX, positionY, 'brick');
        this.game.stage.addChild(brick);
        this.bricks.push(brick);
      }
    }

    this.game.input.onDown.add(this.releaseBall, this);
  }

  releaseBall(){
    if(this.game.ballOnPaddle){
      this.game.ballOnPaddle = false;
      this.ball.body.velocity.y = -300;
      this.ball.body.velocity.x = -75;
      this.ball.animations.play('spin');
    }
  }

  death() {

    this.deathSound.play();
    this.game.lives -= 1;
    this.game.livesText.setText('lives: ' + this.game.lives);

    if(this.game.lives === 0)
    {
      for (let i = 0; i < this.bricks.length; i++) {
        this.bricks[i].kill();
      }
      this.paddle.kill();
      this.ball.kill();
      this.game.state.start('Lose');
        
    }
    else
    {
        this.game.ballOnPaddle = true;
        this.ball.x = 0;
        this.ball.y = 0;
        this.ball.animations.stop();
        this.ball.body.velocity.setTo(0, 0);
    }
    this.ball.x = this.paddle.x + 16;
    this.ball.y = this.paddle.y - 40;
  }

  update(){
    if(this.game.ballOnPaddle){
      this.ball.body.x = this.paddle.x - 16;
    }
    else{
      this.game.physics.arcade.collide(this.ball, this.paddle, this.ball.hitPaddle.bind(this.ball, this.paddle), null, this);
      for (let i = 0; i < this.bricks.length; i++) {
      this.game.physics.arcade.collide(this.ball, this.bricks[i], this.bricks[i].destroy.bind(this.bricks[i]), null, this);
      }
    }
    if (this.game.score == 80) {
      this.paddle.kill();
      this.ball.kill();
      this.state.start('Win');
    }

    this.ball.update();
  }
  
  render() {
    if (this.fontsReady) {
    }
  }
}