// class
class Game {
  // construction
  constructor() {
    this.playerName = "you";
    this.botName = "bot";
    this.playerOption;
    this.botOption;
    this.winner;
  }
  // setter
  set setPlayerName(name) {
    return (this.playerName = name);
  }
  set setBotName(name) {
    return (this.botName = name);
  }
  set setPlayerOption(option) {
    return (this.playerOption = option);
  }
  set setBotOption(option) {
    return (this.botOption = option);
  }
  set setWinner(winner) {
    this.winner = winner;
  }
  set setWinner(winner) {
    this.winner = winner;
  }
  // getter
  get getPlayerName() {
    return this.playerName;
  }
  get getBotName() {
    return this.botName;
  }
  get getPlayerOption() {
    return this.playerOption;
  }
  get getBotOption() {
    return this.botOption;
  }
  get getWinner() {
    return this.winner;
  }

  // function
  // botBrain
  botBrain() {
    const option = ["scissor", "paper", "rock"];
    let pickOption = option[Math.floor(Math.random() * option.length)];
    return pickOption;
  }
  // winCalculation
  winCalculation() {
    if (this.playerOption == "paper" && this.botOption == "scissor") {
      return this.botName;
    } else if (this.playerOption == "paper" && this.botOption == "rock") {
      return this.playerName;
    } else if (this.playerOption == "rock" && this.botOption == "scissor") {
      return this.playerName;
    } else if (this.playerOption == "rock" && this.botOption == "paper") {
      return this.botName;
    } else if (this.playerOption == "scissor" && this.botOption == "rock") {
      return this.botName;
    } else if (this.playerOption == "scissor" && this.botOption == "paper") {
      return this.playerName;
    } else {
      return "DRAW";
    }
  }

  matchResult() {
    return `<h2>
                <div><span>Player</span><img src="assets/images/${this.playerOption}.jpeg" alt=""></div>
                <div>VS</div> 
                <div><span>Bot</span><img src="assets/images/${this.botOption}.jpeg" alt=""></div>
              </h2>`
  }
}

// function pickOption
function pickOption(option) {
  const start = new Game();
  let inGame = document.getElementsByClassName("inGame")[0];
  let result = document.getElementsByClassName("result")[0];
  start.setPlayerOption = option;
  start.setBotOption = start.botBrain();
  start.setWinner = start.winCalculation();

  inGame.innerHTML = start.matchResult();
  if(start.getWinner != 'DRAW'){
    result.innerHTML = `<h3>${start.getWinner} win</h3>`;
  }else{
    result.innerHTML = `<h3>${start.getWinner}</h3>`;
  }
}
