import Phaser from 'phaser';

export default class extends Phaser.Sprite {
    constructor(phaserGame, x, y, asset) {
      super(phaserGame, x, y, asset);
      this.scale.setTo(1);
      this.anchor.set(0.5);
      phaserGame.physics.enable(this, Phaser.Physics.ARCADE);
      this.body.collideWorldBounds = true;
      this.body.immovable = true;      
      this.brickSound;
      this.create();
    }

    create(){
      this.brickSound = this.game.add.audio('brickSound');
    }

    destroy(ball) {
      ball.changeFrame();
      this.brickSound.play();
      this.kill();
      this.game.score++;
      this.game.scoreText.setText('Score: ' + this.game.score);
    }
}