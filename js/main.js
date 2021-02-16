
const game = () =>{
    var pScore = 0;
    var cScore = 0;
    
    //start game
    const startGame = () =>{
        document.querySelector("#start").addEventListener("click" , ()=>{
            document.querySelector(".match").classList.add("fadeIn");
            document.querySelector("#main").classList.add("fadeOut");
        });
    };

    //play match
    const playMatch = () =>{
        var options = document.querySelectorAll(".options button");
        var playerHand = document.querySelector(".player-hand");
        var computerHand = document.querySelector(".computer-hand");

        const computerOptions = ['rock', 'paper' , 'scissors'];

      
        options.forEach(option => {
            option.addEventListener("click", function(){
                //computer choice
                var randomNumber=Math.floor(Math.random()*3);
                var computerChoice = computerOptions[randomNumber];
               //compareHands
               compareHands(this.textContent , computerChoice);
               //update img
               playerHand.src = `./images/${this.textContent}.png`;
               computerHand.src = `./images/${computerChoice}.png`;
            });
        });        
    };

    //update score
    const updateScore = () =>{
        var playerScore = document.querySelector(".player-score p");
        var computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice , computerChoice) =>{
        var winnerText = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winnerText.textContent = "it is a tie";
            return;
        }
        if(playerChoice === "rock"){
            if(computerChoice === "paper"){
                winnerText.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winnerText.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winnerText.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winnerText.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winnerText.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winnerText.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

    };
       
    startGame();
    playMatch(); 
}

game();