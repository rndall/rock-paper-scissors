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

function getHumanChoice() {
	return prompt("'rock', 'paper', 'scissors'?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	humanChoiceLower = humanChoice.toLowerCase();
	humanChoiceTitle = humanChoiceLower.replace(
		humanChoiceLower.at(0),
		humanChoice.toUpperCase().at(0),
	);
	computerChoiceTitle = computerChoice.replace(
		computerChoice.at(0),
		computerChoice.toUpperCase().at(0),
	);

	if (
		(humanChoiceLower === "rock" && computerChoice === "scissors") ||
		(humanChoiceLower === "paper" && computerChoice === "rock") ||
		(humanChoiceLower === "scissors" && computerChoice === "paper")
	) {
		humanScore++;
		console.log(`You win! ${humanChoiceTitle} beats ${computerChoiceTitle}`);
	} else if (
		(computerChoice === "rock" && humanChoiceLower === "scissors") ||
		(computerChoice === "paper" && humanChoiceLower === "rock") ||
		(computerChoice === "scissors" && humanChoiceLower === "paper")
	) {
		computerScore++;
		console.log(`You lose! ${computerChoiceTitle} beats ${humanChoiceTitle}`);
	} else {
		console.log("It's a tie!");
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

if (humanScore > computerScore) {
	console.log("You won the game!");
} else if (humanScore < computerScore) {
	console.log("You lost the game.");
} else {
	console.log("The game was tied.");
}
