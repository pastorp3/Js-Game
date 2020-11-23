import * as Phaser from 'phaser';
import { playGame } from '../src/scenes/mainscene';
import { gameConfig } from '../src/index';

const game = new Phaser.Game(gameConfig);

test('1. Test preloader scene inheritance from phaser ', () => {
  const testScene = new playGame();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});

test('2. Test if the scene was added to the game', () => {
  game.scene.add('Preload', playGame);
  expect(game.scene.getScenes.length).toBe(2);
});
