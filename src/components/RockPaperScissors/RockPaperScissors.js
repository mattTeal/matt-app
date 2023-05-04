import React, { useState, useEffect } from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa'
import './RockPaperScissors.css'

function RockPaperScissors() {
  const [countdown, setCountdown] = useState(0);
  const [gameIsComplete, setGameIsComplete] = useState();
  const [gameisActivated, setGameIsActivated] = useState();
  const [userDecision, setUserDecision] = useState();
  const [computerDecision, setComputerDecision] = useState();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameResult, setGameResult] = useState();

  const getComputerDecision = () => {
    const decisions = ["rock", "paper", "scissors"]
    const decision = decisions[Math.floor(Math.random() * decisions.length)];
    setComputerDecision(decision)
    return decision;
  }

  const activateGame = async (decision) => {
    setUserDecision(decision);
    if (gameisActivated) return;
    setGameIsActivated(true);
    setCountdown(3)
    const compDecision = getComputerDecision();
    setGameIsComplete(5);
    if (decision === compDecision) {
      setGameResult("Draw!");
    }
    else if ((decision === "rock" && compDecision === "scissors") || (decision === "scissors" && compDecision === "paper") || (decision === "paper" && compDecision === "rock")) {
      setGameResult("You Win!");
      setUserScore(userScore + 1);
    }
    else {
      setGameResult("You Lose!");
      setComputerScore(computerScore + 1);
    }
  };

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 750);
    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    const timer = gameIsComplete > 0 && setInterval(() => setGameIsComplete(gameIsComplete - 1), 750);
    if (gameIsComplete === 0) {
      setGameIsActivated(false);
    }
    return () => clearInterval(timer);
  }, [gameIsComplete]);

  return (
    <div className='game-container'>
      <div className="game-title">
        Lets play Rock, Paper, Scissors!
      </div>
      <div className="game-screen-container">
        <div className="score-container">
          Matt
          <br></br>
          {gameIsComplete !== 0 && gameResult === "You Lose!" ? computerScore - 1 : computerScore}
        </div>
        <div className="game-screens">
          <div className="game-screen">
            <FaHandRock className='game-icon' style={computerDecision === "rock" && countdown === 0 ? {color: 'red'} : null}/>
            <FaHandPaper className='game-icon' style={computerDecision === "paper" && countdown === 0 ? {color: 'red'} : null}/>
            <FaHandScissors className='game-icon' style={computerDecision === "scissors" && countdown === 0 ? {color: 'red'} : null}/>
          </div>
          <div className="game-timer">
            {countdown === 3 ?
              <>Rock</> : countdown === 2 ?
              <>Paper</> : countdown === 1 ?
              <>Scissors</> : gameIsComplete === 0 && gameIsComplete < 2 ?
              <>{gameResult}</>
              :
              <>Shoot!</>
            }
          </div>
          <div className="game-screen">
            <FaHandRock className='game-user-icon' onClick={() => activateGame("rock")} style={userDecision === "rock" ? {color: '#2B5A38'} : null}/>
            <FaHandPaper className='game-user-icon' onClick={() => activateGame("paper")} style={userDecision === "paper" ? {color: '#2B5A38'} : null}/>
            <FaHandScissors className='game-user-icon' onClick={() => activateGame("scissors")} style={userDecision === "scissors" ? {color: '#2B5A38'} : null}/>
          </div>
        </div>
        <div className="score-container">
          You
          <br></br>
          {gameIsComplete !== 0 && gameResult === "You Win!" ? userScore - 1 : userScore}
        </div>
      </div>
    </div>
  )
}

export default RockPaperScissors