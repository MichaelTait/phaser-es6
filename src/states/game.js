var paddleSprite

export default class extends Phaser.State {
  constructor() {
    super();
    this.fontsReady = false;
  }

  init() {
    //Set the main background colour of the scene.
    this.stage.backgroundColour = '#4F759B';
  }

  render() {
    if (this.fontsReady) {
      console.log('Fonts loaded')
    }
  }
}