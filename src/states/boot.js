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

  create() {
    this.state.start('Game');
    //this.state.start('GameOver');
  }

  render() {
      this.state.start('Game');
  }
}