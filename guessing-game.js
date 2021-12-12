function guessingGame() {
	const randomNum = Math.floor(Math.random() * 100);
	let gameOver = false;
	let guesses = 0;
	return num => {
		if (gameOver)
			return `The game is over, you already won!`;
		guesses++;
		if (num === randomNum) {
			gameOver = true;
			return `You win! You found ${randomNum} in ${guesses} guesses.`;
		}
		return `${num} is too ${num > randomNum
			? "high" : "low"
			}!`;
	};
}

module.exports = { guessingGame };
