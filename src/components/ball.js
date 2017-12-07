import Phaser from 'phaser';
import {paddle} from '../assets';

export default class extends Phaser.Sprite {
    constructor(phaserGame, x, y, asset) {
        super(phaserGame, x, y, asset);
        console.log(phaserGame)
        phaserGame.add.world(this);
    }

    create(){
        this.anchor.set(0.5);
        phaserGame.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.events.onOutOfBounds.add(ballLost, this);
        //this.animations.add('spin', ['chipBlackWhite_border.png', 'chipBlueWhite_border.png', 'chipGreenWhite_border.png', 'chipWhite_border.png'], 50, true, false);
    }

    update(){
        game.physics.arcade.collide(this, paddle, )
    }
}