/* eslint-disable  new-cap, no-unused-vars */

import * as Phaser from 'phaser';
import titleScene from '../src/scenes/menu';
import { gameConfig } from '../src/index';


window.onload = jest.fn();

const game = new Phaser.Game(gameConfig);

test('1. Test preloader scene inheritance from phaser ', () => {
  const testScene = new titleScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});