import React from "react"
import { nanoid } from "nanoid"

export default function Quiz(props) {
  const answerElements = props.shuffledAnswers.map((answer) => {
    let state = props.gameState
    const buttonStyles = {
      backgroundColor:
        state === 1 && answer === props.selectedAnswer
          ? "#8b9ed4"
          : state === 2 && answer === props.correctAnswer
          ? "#4EB26C"
          : state === 2 && answer !== props.correctAnswer
          ? "#d15259"
          : "white",
      opacity:
        state === 1 ||
        (state === 2 && answer === props.selectedAnswer && props.correctAnswer === answer)
          ? "1"
          : "0.5",
      border: answer === props.selectedAnswer ? "3px solid black" : ""
    }

    return (
      <button
        key={nanoid()}
        quenum={props.num}
        id={props.id}
        style={buttonStyles}
        className="answer"
        onClick={() => props.holdAnswer(props.id, answer)}
      >
        {answer}
      </button>
    )
  })

  return (
    <div className="question-div">
      <p className="question">{props.question}</p>
      <div className="answers-div">{answerElements}</div>
    </div>
  )
}
