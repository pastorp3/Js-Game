import * as Phaser from 'phaser';
import platformImg from '../assets/brks_2.png';
import coinImg from '../assets/coin.png';
import playBttn from '../assets/playbttn.png';
import restartBttn from '../assets/restartbttn.png';
import homeBttn from '../assets/home.png';
import boardBttn from '../assets/board.png';
import ninjaAnim from '../animations/ninja_run.png';
import ninjaJson from '../animations/ninja_run.json';
import logo from '../assets/logo.png';

class preloadGame extends Phaser.Scene {
  constructor() {
    super('PreloadGame');
  }

  preload() {
    this.load.image('platform', platformImg);
    this.load.image('playbttn', playBttn);
    this.load.image('restartbttn', restartBttn);
    this.load.image('homebttn', homeBttn);
    this.load.image('boardbttn', boardBttn);
    this.load.image('ninjalogo', logo);
    this.load.spritesheet('coin', coinImg, {
      frameWidth: 20,
      frameHeight: 20,
    });
    this.load.atlas('ninja', ninjaAnim, ninjaJson);
  }


  create() {
    this.anims.create({
        key: 'run',
        frames: [
            { key: 'ninja',frame:'Run__000.png'},
            { key: 'ninja',frame:'Run__001.png'},
            { key: 'ninja',frame:'Run__002.png'},
            { key: 'ninja',frame:'Run__003.png'},
            { key: 'ninja',frame:'Run__004.png'},
            { key: 'ninja',frame:'Run__005.png'},
            { key: 'ninja',frame:'Run__006.png'},
            { key: 'ninja',frame:'Run__007.png'},
            { key: 'ninja',frame:'Run__008.png'},
            { key: 'ninja',frame:'Run__009.png'},
        ],
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
      key: 'rotate',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });
    this.scene.start('Title');
  }
}
export default preloadGame;