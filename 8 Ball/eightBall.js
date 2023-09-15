document.getElementById('askButton').addEventListener('click', function () {
  const eightBallName = "8 Ball";
  let userName = document.getElementById("userNameId").value;
  const userQuestion = document.getElementById("userQuestionId").value;
  // Check if inputs are empty
  if (!userName.trim() || !userQuestion.trim()) {
    alert('Please enter your name and question.');
    return;
  }
  // Display name and question
  document.getElementById('UserNameAndQuestion').innerHTML = `<strong><em>${userName} asks:</em></strong> ${userQuestion}`;

  const randomNumber = Math.floor(Math.random() * 38);
  let eightBall = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Don't count on it!";
      break;
    case 3:
      eightBall = "Why are you asking me?!";
      break;
    case 4:
      eightBall = "Ask Tootsie!";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
    case 8:
      eightBall = "As clear as a London fog";
      break;
    case 9:
      eightBall = "Blimey, I don’t know!";
      break;
    case 10:
      eightBall = "Ask your mum!";
      break;
    case 11:
      eightBall = "Better not spill the tea on that!";
      break;
    case 12:
      eightBall = "The Queen's guards said 'maybe'";
      break;
    case 13:
      eightBall = "I'm too busy watching football!";
      break;
    case 14:
      eightBall = "Would a double-decker bus know?";
      break;
    case 15:
      eightBall = "That's a sticky wicket!";
      break;
    case 16:
      eightBall = "Mmm... fish and chips. What was the question?";
      break;
    case 17:
      eightBall = "Not on a rainy day!";
      break;
    case 18:
      eightBall = "Crikey! That’s a tough one!";
      break;
    case 19:
      eightBall = "Watch EastEnders and then ask me!";
      break;
    case 20:
      eightBall = "As likely as beans on toast!";
      break;
    case 21:
      eightBall = "The pigeons in Trafalgar Square told me 'yes'";
      break;
    case 22:
      eightBall = "You're having a giggle!";
      break;
    case 23:
      eightBall = "Only if you spot Nessie!";
      break;
    case 24:
      eightBall = "Ask Sherlock!";
      break;
    case 25:
      eightBall = "Only if you dance the jive!";
      break;
    case 26:
      eightBall = "Roll a dice, then tell me!";
      break;
    case 27:
      eightBall = "It’s as mysterious as Stonehenge!";
      break;
    case 28:
      eightBall = "Only on pancake day!";
      break;
    case 29:
      eightBall = "Not until the cows come home!";
      break;
    case 30:
      eightBall = "Maybe after a cuppa!";
      break;
    case 31:
      eightBall = "It's like finding a needle in a haystack!";
      break;
    case 32:
      eightBall = "Do unicorns fly?";
      break;
    case 33:
      eightBall = "I'm on a tea break!";
      break;
    case 34:
      eightBall = "That's a secret between Big Ben and me!";
      break;
    case 35:
      eightBall = "As likely as a snow day in July!";
      break;
    case 36:
      eightBall = "I've sent an owl with the answer!";
      break;
    case 37:
      eightBall = "That's a right pickle!";
      break;

    default:
      eightBall = `${eightBallName} I'm tired, ask me later!`
  }

  // Display the answer
  document.getElementById('eightBallAnswerID').innerHTML = `<strong><em>${eightBallName} responds:</em></strong> ${userName}, ${eightBall}`;


});

