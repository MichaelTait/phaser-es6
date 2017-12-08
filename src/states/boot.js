import Phaser from 'phaser';
import WebFont from 'webfontloader';

export default class extends Phaser.State {
  constructor() {
    super();
    this.fontsReady = false;
    this.sound;
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

   this.load.audio('gamePlay', 'src/assets/Audio/gamePlay.mp3');

    this.load.image('jakub', 'src/assets/images/jakub.png');
  }



  create() {
    game.add.tileSprite(0,0, window.innerWidth, window.innerHeight, 'jakub');
    const text = this.add.text(this.world.centerX, this.world.centerY, 'Bede Bricks', {
      font: '44px Arial', fill: '#000000', align: 'center'
    });
    text.anchor.setTo(0.5, 0.5);
    const subText = this.add.text(this.world.centerX, this.world.centerY + 50, 'Click anywhere to begin...', {
      font: '33px Arial', fill: '#000000', align: 'center'
    });
    subText.anchor.setTo(0.5, 0.5);

    this.sound = this.add.audio('gamePlay')
    this.sound.play();
  }

  render() {
    if (this.fontsReady) {
    }
  }

  update() {
    if (this.input.activePointer.isDown) {
      this.state.start('Game');
      this.sound.stop();
    }
  }
}