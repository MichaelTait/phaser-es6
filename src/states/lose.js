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
    this.stage.backgroundColour = '#4F759B';
  }

  preload() {
    // Load the Ubuntu font family from google fonts.
    WebFont.load({
      google: {
        families: ['Ubuntu']
      },
      active: () => this.fontsReady = true
    });

   

    //this.load.image('jakub', 'src/assets/images/jakub.png');
  }

  create() {
    //game.add.tileSprite(0,0, window.innerWidth, window.innerHeight, 'jakub');
    const text = this.add.text(this.world.centerX, this.world.centerY, 'You lose :(', {
      font: '44px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.setTo(0.5, 0.5);
    const subText = this.add.text(this.world.centerX, this.world.centerY + 50, 'Try again', {
      font: '33px Arial', fill: '#ffffff', align: 'center'
    });
    subText.anchor.setTo(0.5, 0.5);
  }


  render() {
    if (this.fontsReady) {
      console.log('Fonts loaded');
    }
  }

}