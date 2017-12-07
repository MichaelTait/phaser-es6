import Phaser from 'phaser';
import {paddle} from '../assets';

export default class extends Phaser.Sprite {
    constructor(phaserGame, x, y, asset) {
        super(phaserGame, x, y, asset);
        this.scale.setTo(1);
        this.anchor.set(0.5);
        phaserGame.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        // this.events.onOutOfBounds.add(ballLost, this);
        this.animations.add('spin', ['chipBlackWhite_border.png', 'chipBlueWhite_border.png', 'chipGreenWhite_border.png', 'chipWhite_border.png'], 50, true, false);
        this.body.velocity.setTo(1000, 1000);
    }

    create(){
        
    }

    update(){
        // game.physics.arcade.collide(this, paddle, )
    }

    render() {
        console.log('ball rendering')
    }
}