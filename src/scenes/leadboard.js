/* eslint-disable  import/no-cycle, no-unused-vars, prefer-destructuring, class-methods-use-this  */

import * as Phaser from 'phaser';
import {
  getScores,
} from '../scoresApi/data';
import {
  gameOptions,
} from '../index';

class leadBorad extends Phaser.Scene {
  constructor() {
    super('LeadBoard');
  }

  async create() {
    const top = await this.getTopScores();
    for (let i = 0; i < top.length; i += 1) {
      const user = top[i].user;
      const score = top[i].score;
      this.add.text((gameOptions.widthWindow / 4) * 0.5, ((100 / 5) * (i + 1)) + 80 * (i + 1), `${i + 1}.- ${user} Score: ${score}`, {
        color: '#7801F8',
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: '40px',
      });
    }
    const restartbttn = this.add.image((gameOptions.widthWindow / 4) * 3, (gameOptions.heightWindow / 4) * 1 - 80, 'restartbttn');
    restartbttn.scale = 0.25;
    restartbttn.setInteractive();
    restartbttn.on('pointerdown', this.restart.bind(this));
    const homebttn = this.add.image((gameOptions.widthWindow / 4) * 3, (gameOptions.heightWindow / 4) * 2 - 80, 'homebttn');
    homebttn.scale = 0.25;
    homebttn.setInteractive();
    homebttn.on('pointerdown', this.home.bind(this));
  }

  async getTopScores() {
    const scores = await getScores();
    const points = scores.map(item => item.score);
    let leaderLength = 5;
    const top5 = [];
    if (scores.length < leaderLength) {
      leaderLength = scores.length;
    }
    for (let i = 0; i < leaderLength; i += 1) {
      const max = Math.max(...points);
      const maxindex = points.indexOf(max);
      top5.push(scores[maxindex]);
      scores.splice(maxindex, 1);
      points.splice(maxindex, 1);
    }
    return top5;
  }

  restart() {
    gameOptions.points = 0;
    this.scene.start('PlayGame');
  }

  home() {
    gameOptions.userName = '';
    this.scene.start('Title');
  }
}
export default leadBorad;