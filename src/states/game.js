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
    this.game.load.image('ball', 'src/assets/images/ball.png')
    const ball = new Ball(this.game, 400, 200, 'ball');
    const text = this.add.text(this.world.centerX, this.world.centerY, 'Bede Test2', {
      font: '44px Arial', fill: '#efefef', align: 'center'
    });
    text.anchor.setTo(0.5, 0.5);
    this.add.sprite(ball)
    console.log(ball);
  }

  render() {
    if (this.fontsReady) {
      //console.log('Fonts loaded')
    }
  }

  create(){
    
  }
}