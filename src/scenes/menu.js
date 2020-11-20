/* eslint-disable  import/no-cycle  */

import {
  gameOptions,
} from '../index';
import * as Phaser from 'phaser';

export default class titleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }
  create() {
    const userName = document.getElementsByTagName('input')[0];
    userName.classList.toggle('hide');
    const playbttn = this.add.image((gameOptions.widthWindow / 4) * 3, (gameOptions.heightWindow / 4) * 3 - 80, 'playbttn');
    playbttn.setScale(1);
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