import {
  game,
  gameOptions
} from '../index';
export default class titleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }
  create() {
    const userName = document.getElementsByTagName('input')[0];
    userName.classList.toggle('hide');
    let widthWindow = 1334;
    let heightWindow = 750;
    const playbttn = this.add.image((widthWindow / 4) * 3, (heightWindow / 4) * 3 - 80, "playbttn");
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
    this.scene.start("PlayGame");
  }
}