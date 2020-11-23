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
    restartbttn.scale = 0.25;
    restartbttn.setInteractive();
    restartbttn.on('pointerdown', this.restart.bind(this));
    const homebttn = this.add.image((gameOptions.widthWindow / 4) * 3, (gameOptions.heightWindow / 4) * 2 - 80, 'homebttn');
    homebttn.scale = 0.25;
    homebttn.setInteractive();
    homebttn.on('pointerdown', this.home.bind(this));
    const boardbttn = this.add.image((gameOptions.widthWindow / 4) * 3, (gameOptions.heightWindow / 4) * 1 - 80, 'boardbttn');
    boardbttn.scale = 0.25;
    boardbttn.setInteractive();
    boardbttn.on('pointerdown', this.leadboard.bind(this));
    this.add.text((gameOptions.widthWindow / 4) * .5, (gameOptions.heightWindow / 4) * 1 - 80, 'GameOver', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '130px', color: '#7801F8' });
    this.add.text((gameOptions.widthWindow / 4) * .75, (gameOptions.heightWindow / 4) * 2 - 120, `Your Score: ${gameOptions.points}`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '70px', color: '#7801F8' });

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