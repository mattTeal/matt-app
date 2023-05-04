import React, { useState } from 'react'
import { BIO_QUESTIONS } from '../constants';
import './BioQuiz.css'

function BioQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [isCorrect, setIsCorrect] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [isFirstGuess, setIsFirstGuess] = useState(true);

  const checkAnswer = (selectedAnswer) => {
    if (BIO_QUESTIONS[currentQuestion]["choices"][selectedAnswer] === BIO_QUESTIONS[currentQuestion]["answer"]) {
      if (isFirstGuess) {
        setIsFirstGuess(false);
        setTotalCorrect(totalCorrect + 1);
      }
      return setIsCorrect(true);
    }
    if (isFirstGuess) {
      setIsFirstGuess(false);
    }
    return setIsCorrect(false);
  }

  const goToNextQuestion = () => {
    setSelectedAnswer();
    setIsCorrect(null);
    setIsFirstGuess(true);
    if (currentQuestion < BIO_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    setIsComplete(true);
  }

  const redoQuiz = () => {
    setSelectedAnswer();
    setIsCorrect(null);
    setIsFirstGuess(true);
    setCurrentQuestion(0);
    setIsComplete(false);
  }

  return (
    <div className='bio-quiz-container'>
      <div className="bio-quiz-title">
        A Quiz About Me
      </div>
      {isComplete === false ?
        <>
          <div className="bio-question-container">
            {BIO_QUESTIONS[currentQuestion]["question"]}
          </div>
          {isCorrect === true ? 
            <div className="bio-correct-container">
              Correct!
            </div> 
            : isCorrect === false ? 
            <div className="bio-correct-container">
              Incorrect!
            </div> 
            : null
          }
          {BIO_QUESTIONS[currentQuestion]["choices"].map((choice, index) => {
            return (
              <div 
                className="bio-choice-container" 
                onClick={() => setSelectedAnswer(index)}
                style={selectedAnswer === index ? {backgroundColor: '#2B5A3850'} : null}
              >
                {choice}
              </div>
            )
          })}
          {isCorrect === true ? 
            <div className="check-answer-button" onClick={() => goToNextQuestion()}>
              Next
            </div>
            :
            selectedAnswer >= 0 ?
            <div className="check-answer-button" onClick={() => checkAnswer(selectedAnswer)}>
              Submit
            </div>
            :
            null
          }
        </>
        :
        <div className='grade-parent-container'>
          <div className='grade-container'>
            {totalCorrect / BIO_QUESTIONS.length * 100} / 100
          </div>
          <div className='grade-container'>
            You got {totalCorrect} out of {BIO_QUESTIONS.length} questions correct!
          </div>
          <div className="check-answer-button" onClick={() => redoQuiz()}>
            Redo
          </div>
        </div>
      }
    </div>
  )
}

export default BioQuiz