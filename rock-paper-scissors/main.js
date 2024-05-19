const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('error');
    }
  }
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0 ) {
      return 'rock';
    } else if (choice === 1) {
      return 'paper';
    } else if (choice === 2) {
      return 'scissors';
    }
   }
   function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'You won with the secret cheat code!';
    }
    if (userChoice === computerChoice) {
      return "it's a draw!"
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'the computer won'
      } else {
        return 'you won'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'the computer won'
      } else {
        return 'you won'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'the computer won'
      } else {
        return 'you won'
      }
    }
   };
   function playGame(string) {
    let userChoice = getUserChoice(string);
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
   };
  playGame('bomb');
  playGame('rock');
  playGame('paper');
  playGame('scissors');
  