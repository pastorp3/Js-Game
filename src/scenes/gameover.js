/* eslint-disable  import/no-cycle, no-unused-vars  */

import * as Phaser from 'phaser';
import {
  addscore,
} from '../scoresApi/data';
import {
  gameOptions,
} from '../index';

class gameOver extends Phaser.Scene {
  constructor() {
    super('Gameover');
  }

  async create() {
    const save = await addscore();
    const restartbttn = this.add.image((gameOptions.widthWindow / 4) * 3, (gameOptions.heightWindow / 4) * 3 - 80, 'restartbttn');
    restartbttn.scale = 0.5;
    restartbttn.setInteractive();
    restartbttn.on('pointerdown', this.restart.bind(this));
    const homebttn = this.add.image((gameOptions.widthWindow / 4) * 2, (gameOptions.heightWindow / 4) * 2 - 80, 'homebttn');
    homebttn.scale = 0.5;
    homebttn.setInteractive();
    homebttn.on('pointerdown', this.home.bind(this));
    const boardbttn = this.add.image((gameOptions.widthWindow / 4) * 1, (gameOptions.heightWindow / 4) * 1 - 80, 'boardbttn');
    boardbttn.scale = 0.5;
    boardbttn.setInteractive();
    boardbttn.on('pointerdown', this.leadboard.bind(this));
  }

  restart() {
    gameOptions.points = 0;
    this.scene.start('PlayGame');
  }

  home() {
    gameOptions.userName = '';
    this.scene.start('Title');
  }

  leadboard() {
    this.scene.start('LeadBoard');
  }
}
export default gameOver;