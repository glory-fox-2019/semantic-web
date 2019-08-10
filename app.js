$(document).ready(function (){
    const game = ()=> {
        let pScore = 0;
        let cScore = 0;
    
        //Start game
        const startGame = () =>{
            const playBtn = $('.intro button');
            const introScreen = $('.intro');
            const match = $('.match');

            playBtn.click(function () {
                introScreen.addClass('fadeOut');
                match.addClass('fadeIn');
            });
        };
        //Play match
        const playMatch = () => {
            const options = $('.options button');
            const playerHand = $('.player-hand');
            const computerHand = $('.computer-hand');

            //Computer Options
            const computerOptions = ['rock', 'paper', 'scissors'];
    
            Object.values(options).forEach((option, index) => {
                const optionClass = $(option).attr('class');

                $(`.${ optionClass }`).click(function(){
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[computerNumber];

                    compareHands($(this).text(), computerChoice);

                    playerHand.attr('src', `http://127.0.0.1:8080/images/${$(this).text()}.png`);
                    computerHand.attr('src', `http://127.0.0.1:8080/images/${computerChoice}.png`);
                });

            });
        };
    
        const updateScore = () => {
            const playerScore = $('.player-score p');
            const computerScore = $('.computer-score p');
            playerScore.html(pScore) 
            computerScore.html(cScore) 
        }
    
        const compareHands = (playerchoice, computerChoice) =>{
            //update text
            const winner = $('.winner');
            //checking for a tie
            if(playerchoice === computerChoice) {
                winner.html('It is a tie')
                return
            }
            //check for rock
            if(playerchoice === 'rock') {
                if(computerChoice === 'scissors') {
                    winner.html('Player Wins')  
                    pScore++
                    updateScore()
                    return;
                } else {
                    winner.html('Computer Wins') 
                    cScore++
                    updateScore()
                    return;
                }
            }
            //check for paper
            if(playerchoice === 'paper') {
                if(computerChoice === 'scissors') {
                    winner.html('Computer Wins') 
                    cScore++
                    updateScore()
                    return;
                } else {
                    winner.html('Player Wins')
                    pScore++
                    updateScore()
                    return;
                }
            }
            //check for scissors
            if(playerchoice === 'scissors') {
                if(computerChoice === 'rock') {
                    winner.html('Computer Wins')
                    cScore++
                    updateScore()
                    return;
                } else {
                    winner.html('Player Wins')
                    pScore++
                    updateScore()
                    return;
                }
            }
        }
    
        //Is call all the inner function
        startGame();
        playMatch();
    }
    
    //Start Game function
    game();
});