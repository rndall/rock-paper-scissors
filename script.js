const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

for (const button of buttons) {
	button.addEventListener("click", (e) => {
		const humanSelection = e.target.value;
		const computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);
	});
}

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
		result.textContent = `You win! ${humanChoiceTitle} beats ${computerChoiceTitle}`;
	} else if (
		(computerChoice === "rock" && humanChoiceLower === "scissors") ||
		(computerChoice === "paper" && humanChoiceLower === "rock") ||
		(computerChoice === "scissors" && humanChoiceLower === "paper")
	) {
		computerScore++;
		result.textContent = `You lose! ${computerChoiceTitle} beats ${humanChoiceTitle}`;
	} else {
		result.textContent = "It's a tie!";
	}

	if (humanScore === 5 || computerScore === 5) {
		if (humanScore > computerScore) {
			result.textContent += "You won the game!";
		} else if (humanScore < computerScore) {
			result.textContent += "You lost the game.";
		} else {
			result.textContent += "The game was tied.";
		}

		humanScore = 0;
		computerScore = 0;
	}
}
