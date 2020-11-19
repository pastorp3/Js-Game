import platformImg from '../assets/brks_2.png';
import playerImg from '../assets/player.png';
import coinImg from '../assets/coin.png'
import playBttn from '../assets/playbttn.png';
import * as Phaser from 'phaser';

class preloadGame extends Phaser.Scene{
    constructor(){
        super("PreloadGame");
    }
    preload(){
        this.load.image("platform", platformImg);
        this.load.image("playbttn", playBttn);


        this.load.spritesheet("player", playerImg, {
            frameWidth: 24,
            frameHeight: 48
        });


        this.load.spritesheet("coin", coinImg, {
            frameWidth: 20,
            frameHeight: 20
        });

    }
    create(){


        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 1
            }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: "rotate",
            frames: this.anims.generateFrameNumbers("coin", {
                start: 0,
                end: 5
            }),
            frameRate: 15,
            yoyo: true,
            repeat: -1
        });

        this.scene.start("Title");
    }
}

export default preloadGame;
