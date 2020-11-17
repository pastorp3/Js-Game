import * as Phaser from 'phaser';

import { SimpleScene } from './in';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);