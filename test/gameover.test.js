/* eslint-disable  new-cap */

import * as Phaser from 'phaser';
import gameOver from '../src/scenes/gameover';
import { gameConfig } from '../src/index';

window.onload = jest.fn();

const game = new Phaser.Game(gameConfig);

test('1. Test preloader scene inheritance from phaser ', () => {
  const testScene = new gameOver();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});

test('2. Test if the scene was added to the game', () => {
  game.scene.add('Preload', gameOver);
  expect(game.scene.getScenes.length).toBe(2);
});
