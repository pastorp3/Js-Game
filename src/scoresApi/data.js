import { gameOptions } from '../index';


	
		const gameId = '8db8F866T3rQmZ3YQBea';
		let apiScores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + gameId + '/scores';

	

	async function  getScores() {
		const fetchOptions = {
			headers: {
				"Content-Type": "application/json; charset=UTF-8"
			},
			method: "GET",
		};
		
		const data = await fetch(apiScores,fetchOptions);
		const { result: scores } = await data.json();

		return scores;	
	}

	async function addscore(){
		const score = gameOptions.points;
		const player = gameOptions.userName;

		const saveData = {
			"user": player,
			"score": score,
		};

		const fetchOptions = {
			headers: {
				"Content-Type": "application/json; charset=UTF-8"
			},
			body: JSON.stringify(saveData),
			method: "POST",
		};

		const data = await fetch(apiScores, fetchOptions);
		const request = await data.json();

		return request;
	
	}

	export { getScores, addscore};








