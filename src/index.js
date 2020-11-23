/* eslint-disable  import/no-cycle, import/no-mutable-exports, prefer-const,  func-names, padded-blocks */

import * as Phaser from 'phaser';
import {
  playGame,
  resize,
} from './scenes/mainscene';
import preloadGame from './scenes/preload';
import Title from './scenes/menu';
import gameOver from './scenes/gameover';
import leadBoard from './scenes/leadboard';
import './style/main.css';

let game;
let gameOptions = {
  platformSpeedRange: [300, 300],
  mountainSpeed: 80,
  spawnRange: [80, 300],
  platformSizeRange: [90, 300],
  platformHeightRange: [-5, 5],
  platformHeighScale: 20,
  platformVerticalLimit: [0.4, 0.8],
  playerGravity: 900,
  jumpForce: 400,
  playerStartPosition: 200,
  jumps: 2,
  coinPercent: 25,
  userName: '',
  points: 0,
  widthWindow: 1334,
  heightWindow: 750,
};

const gameConfig = {
  type: Phaser.AUTO,
  width: 1334,
  height: 750,
  scene: [preloadGame, Title, playGame, gameOver, leadBoard],
  backgroundColor: 0xffffff,
  physics: {
    default: 'arcade',
  },
};

window.onload = function () {
  game = new Phaser.Game(gameConfig);
  window.focus();
  resize();
  window.addEventListener('resize', resize, false);
};
export {
  game,
  gameOptions,
  gameConfig,
};