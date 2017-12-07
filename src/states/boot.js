import Phaser from 'phaser';
import WebFont from 'webfontloader';

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

    const text = this.add.text(this.world.centerX, this.world.centerY, 'Bede Bricks', {
      font: '44px Arial', fill: '#efefef', align: 'center'
    });
    text.anchor.setTo(0.5, 0.5);
  }

  render() {
    if (this.fontsReady) {
      console.log('Fonts loaded');
      this.state.start('game');
    }
  }
}