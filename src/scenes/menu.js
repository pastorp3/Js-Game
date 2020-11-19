export default class titleScene extends Phaser.Scene {
	constructor() {
		super('Title');
	}

	create() {
		const userName = document.getElementsByTagName('input')[0];
		userName.classList.toggle('hide');
		let widthWindow =  1334;
		let heightWindow = 750;
		
		const playbttn = this.add.image((widthWindow / 4)* 3 + 50, (heightWindow / 4)*3, "playbttn");
		playbttn.setScale(1);
		playbttn.setInteractive();

		playbttn.on('pointerdown', this.play.bind(this));


	}

	play() {
		const userName = document.getElementsByTagName('input')[0];
		if(userName.value === '') userName.value = 'PlayerUknown';

		userName.classList.toggle('hide');
		this.sys.game.globals.username = userInput.value;
		userName.value = '';
		this.scene.start("PlayGame");
	}
}