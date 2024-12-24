function getComputerChoice() {
	const random = Math.floor(Math.random() * 3 + 1);

	switch (random) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
}
console.log(getComputerChoice());

function getHumanChoice() {
	choice = prompt("'rock', 'paper', 'scissors'?");
	return choice;
}
console.log(getHumanChoice());
