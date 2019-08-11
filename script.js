let userScores = document.querySelector('.user-score')
let computerScores = document.querySelector('.computer-score')

class RPS {
    constructor() {
        this._userScore = 0
        this._computerScore = 0
    }

    getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissor"
        }
    }

    determineWinner(userChoice, computerChoice) {

        let message = ''
        if (userChoice === computerChoice) {
            message = "The game is a tie."

        } else if (userChoice === "rock") {
            if (computerChoice === "paper") {
                this._computerScore += 1
                message = "You Lose! The computer won!";
            } else {
                this._userScore += 1
                message = "You won!";
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissor") {
                this._computerScore += 1
                message = "You Lose! The computer won!";
            } else {
                this._userScore += 1
                message = "You win!";
            }
        } else if (userChoice === "scissor") {
            if (computerChoice === "rock") {
                this._computerScore += 1
                message = "You Lose! The computer won!";
            } else {
                this._userScore += 1
                message = "You won!";
            }
        }

        userScores.innerHTML = ''
        computerScores.innerHTML = ''
        let nodeUser = document.createElement('span');
        let nodeComputer = document.createElement('span')
        let scoreUser = document.createTextNode(`Score: ${this._userScore}`)
        let scoreComputer = document.createTextNode(`Score: ${this._computerScore}`)

        nodeUser.appendChild(scoreUser)
        nodeComputer.appendChild(scoreComputer)

        userScores.appendChild(nodeUser)
        computerScores.appendChild(nodeComputer)

        return message
    }
}

let Game = new RPS()

let userPaper = document.querySelector(".paper");
let userRock = document.querySelector(".rock");
let userScissor = document.querySelector(".scissor")

// IF USER CHOOSE PAPER -----------------------------------
userPaper.addEventListener("click", function () {

    let compChoice = Game.getComputerChoice();
    let usChoice = "paper";
    let result = Game.determineWinner(usChoice, compChoice);

    let compImg = document.querySelector(".img-computer")

    if (compChoice == "paper") {
        compImg.setAttribute("src", "img/paper.jpg")
    } else if (compChoice == "rock") {
        compImg.setAttribute("src", "img/rock.jpg")
    } else if (compChoice == "scissor") {
        compImg.setAttribute("src", "img/scissor.jpg")
    }


    let hasil = document.querySelector("span.hasil")
    hasil.innerHTML = result;
})

//IF USER CHOOSE ROCK -------------------------------------
userRock.addEventListener("click", function () {

    let compChoice = Game.getComputerChoice();
    let usChoice = "rock";

    let result = Game.determineWinner(usChoice, compChoice);

    let compImg = document.querySelector(".img-computer")

    if (compChoice == "paper") {
        compImg.setAttribute("src", "img/paper.jpg")
    } else if (compChoice == "rock") {
        compImg.setAttribute("src", "img/rock.jpg")
    } else if (compChoice == "scissor") {
        compImg.setAttribute("src", "img/scissor.jpg")
    }

    let hasil = document.querySelector("span.hasil")
    hasil.innerHTML = result;
})

//IF USER CHOOSE SCISSOR ----------------------------------
userScissor.addEventListener("click", function () {

    let compChoice = Game.getComputerChoice();
    let usChoice = "scissor";

    let result = Game.determineWinner(usChoice, compChoice);

    let compImg = document.querySelector(".img-computer")

    if (compChoice == "paper") {
        compImg.setAttribute("src", "img/paper.jpg")
    } else if (compChoice == "rock") {
        compImg.setAttribute("src", "img/rock.jpg")
    } else if (compChoice == "scissor") {
        compImg.setAttribute("src", "img/scissor.jpg")
    }

    let hasil = document.querySelector("span.hasil")
    hasil.innerHTML = result;
})