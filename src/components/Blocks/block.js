import Phaser from 'phaser';

export default class extends Phaser.Sprite {
    constructor(phaserGame, x, y, asset) {
      super(phaserGame, x, y, asset);
      this.scale.setTo(1);
      this.anchor.set(0.5);
      phaserGame.physics.enable(this, Phaser.Physics.ARCADE);
      this.body.collideWorldBounds = true;
      this.body.immovable = true;
    }
}