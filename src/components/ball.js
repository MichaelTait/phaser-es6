import Phaser from 'phaser';
import {paddle} from '../assets';

export default class extends Phaser.Sprite {
    constructor(phaserGame, x, y, asset) {
        super(phaserGame, x, y, asset);
        this.scale.setTo(0.5);
        this.anchor.set(0.5);
        phaserGame.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        //this.animations.add('spin', ['ball1', 'ball2', 'ball3', 'ball4'], 50, true, false);
        //this.animations.play('spin');
        this.body.velocity.y = -200;
        this.body.velocity.x = -75;
    }

    hitPaddle(paddle){
        var diff = 0;

        if(this.x < paddle.x)
        {
            diff = paddle.x - this.x;
            this.body.velocity.x = (-10 * diff);
        }
        else if (this.x > paddle.x)
        {
            diff = this.x - paddle.x;
            this.body.velocity.x = (10 * diff);
        }
        else
        {
            this.body.velocity.x = 2 + Math.random() * 8;
        }
    }
}