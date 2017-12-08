import Phaser from 'phaser';
import {paddle} from '../assets';

export default class extends Phaser.Sprite {
    constructor(phaserGame, x, y, asset) {
        super(phaserGame, x, y, asset);
        this.scale.setTo(0.5);
        this.anchor.set(0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.checkWorldBounds = true;
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.create();
        this.game.physics.arcade.checkCollision.down = false;
        this.collisionSound;
        this.ballFrame = 1;
    }

    create()
    {
        this.animations.add('blink', ['ball1.png', 'ball2.png', 'ball3.png', 'ball4.png'], 5, true, false);

        this.collisionSound = this.game.add.audio('collisionSound');
    }

    update(){
        const blocked = this.body.blocked
        if(blocked.left || blocked.right || blocked.up){
            this.collisionSound.play();
            this.changeFrame();
        }
    }

    changeFrame(){
        console.log('here')
        this.ballFrame++;
        if(this.ballFrame > 4){
            this.ballFrame = 1;
        }
        this.frameName = 'ball' + this.ballFrame + '.png';
    }

    hitPaddle(paddle){
        var diff = 0;
        const difficulty = Math.floor(this.game.score / 2);

        this.collisionSound.play();
        if(this.x < paddle.x)
        {
            diff = paddle.x - this.x;
            this.body.velocity.x = (-20 * diff + difficulty);
        }
        else if (this.x > paddle.x)
        {
            diff = this.x - paddle.x;
            this.body.velocity.x = (20 * diff);
        }
        else
        {
            this.body.velocity.x = 10 + Math.random() * 20;
        }
    }
}