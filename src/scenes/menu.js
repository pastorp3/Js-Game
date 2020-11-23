/* eslint-disable  import/no-cycle  */

import * as Phaser from 'phaser';
import {
  gameOptions,
} from '../index';

export default class titleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const userName = document.getElementsByTagName('input')[0];
    userName.classList.toggle('hide');
    const playbttn = this.add.image((gameOptions.widthWindow / 4) * 3, (gameOptions.heightWindow / 4) * 3 - 80, 'playbttn');
    this.add.text((gameOptions.widthWindow / 4) * .75, (gameOptions.heightWindow / 4) * 1 - 80, 'Ninja', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '150px', color: '#7801F8' });
    this.add.text((gameOptions.widthWindow / 4) * 1, (gameOptions.heightWindow / 4) * 2 - 140, 'Run', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '70px', color: '#7801F8' });
    let logoImg = this.add.image((gameOptions.widthWindow / 4) * 1.1, (gameOptions.heightWindow / 4) * 3 - 140, 'ninjalogo');
    logoImg.setScale(.5);
    playbttn.setScale(.75);
    playbttn.setInteractive();
    playbttn.on('pointerdown', this.play.bind(this));
  }

  play() {
    const userInput = document.getElementsByTagName('input')[0];
    if (userInput.value === '') userInput.value = 'PlayerUknown';
    userInput.classList.toggle('hide');
    gameOptions.userName = userInput.value;
    userInput.value = '';
    this.scene.start('PlayGame');
  }
}