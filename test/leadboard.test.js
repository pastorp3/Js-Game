/* eslint-disable  new-cap */

import * as Phaser from 'phaser';
import leadBorad from '../src/scenes/leadboard';
import { gameConfig } from '../src/index';

const game = new Phaser.Game(gameConfig);

test('1. Test preloader scene inheritance from phaser ', () => {
  const testScene = new leadBorad();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});

test('2. Test if the scene was added to the game', () => {
  game.scene.add('Preload', leadBorad);
  expect(game.scene.getScenes.length).toBe(2);
});
