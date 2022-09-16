import "./App.css"
import Quiz from "./Quiz.js"
import React, { useState } from "react"
import { decode } from "he"

import { nanoid } from "nanoid"

import { Dropdown } from "react-dropdown-now"
import "react-dropdown-now/style.css"

function App() {
  const [gameState, setGameState] = useState(0)
  const [settings, setSettings] = useState({
    amount: 6,
    difficulty: "hard",
    type: "",
    categories: "",
  })
  const [questions, setQuestions] = useState([])
  const [correctSum, setCorrectSum] = useState(0)

  let questionNum = 0

  const startGame = () => {
    fetch(
      `https://opentdb.com/api.php?amount=${settings.amount}&difficulty=${settings.difficulty}&${settings.type}`
    )
      .then((res) => res.json())
      .then((data) =>
        setQuestions(
          data.results.map((result) => {
            return {
              id: nanoid(),
              question: decode(result.question),
              correctAnswer: decode(result.correct_answer),
              shuffledAnswers: shuffleAnswers(
                decode(result.correct_answer),
                result.incorrect_answers
              ),
              selectedAnswer: "",
            }
          })
        )
      )
    setTimeout(() => setGameState(1), 600)
  }

  function shuffleAnswers(correctAnswer, incorrectAnswers) {
    const answers = [correctAnswer, ...incorrectAnswers]
    let shuffledAnswers = answers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    return shuffledAnswers
  }

  const holdAnswer = (id, answer) => {
    if (gameState === 2) {
      return
    } else {
      const newQuestions = questions.map((question) => {
        return question.id === id && question.selectedAnswer === ""
          ? { ...question, selectedAnswer: answer }
          : question.id === id && question.selectedAnswer === answer
          ? { ...question, selectedAnswer: "" }
          : question.id === id && answer !== question.selectedAnswer
          ? { ...question, selectedAnswer: answer }
          : { ...question }
      })
      setQuestions(newQuestions)
    }
  }

  function goHome() {
    setGameState(0)
  }

  function updateType(value) {
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        type: value.value,
      }
    })
  }
  function updateAmount(value) {
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        amount: value.value,
      }
    })
  }

  function updateDifficulty(value) {
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        difficulty: value.value,
      }
    })
  }

  function submitQuiz() {
    let sum = 0
    questions.forEach((question) => {
      return question.correctAnswer === question.selectedAnswer ? sum++ : sum
    })
    setCorrectSum(sum)
    setGameState(2)
    window.scrollTo(0, document.body.scrollHeight)
  }

  const typeOptions = [
    { value: "", label: "All question types" },
    { value: "type=multiple", label: "Multiple choice" },
    { value: "type=boolean", label: "True or False" },
  ]
  const amountOptions = [
    { value: "2", label: "2 questions" },
    { value: "4", label: "4 questions" },
    { value: "6", label: "6 questions" },
    { value: "8", label: "8 questions" },
    { value: "10", label: "10 questions" },
  ]

  const difficultyOptions = [
    { value: "easy", label: "Easy difficulty" },
    { value: "medium", label: "Medium difficulty" },
    { value: "hard", label: "Hard difficulty" },
  ]

  const resultElement = <h3 className="result-el">{correctSum} correct answers!</h3>

  const submitEl =
    gameState === 1 ? (
      <button className="submitBtn" onClick={() => submitQuiz()}>
        Submit quiz
      </button>
    ) : (
      <button className="submitBtn newGame" onClick={() => startGame()}>
        Play again
      </button>
    )

  const questionElements = questions.map((question) => {
    return (
      <Quiz
        key={question.id}
        id={question.id}
        gameState={gameState}
        num={(questionNum += 1)}
        question={question.question}
        correctAnswer={question.correctAnswer}
        shuffledAnswers={question.shuffledAnswers}
        selectedAnswer={question.selectedAnswer}
        holdAnswer={holdAnswer}
      />
    )
  })

  const quizEl = (
    <div className="quiz-container">
      <h2>QUIZ</h2>
      {questionElements}
      {gameState === 2 && resultElement}
      <div className="after-div">
        {submitEl}
        {gameState === 2 && (
          <button className="submitBtn home" onClick={() => goHome()}>
            Home
          </button>
        )}
      </div>
    </div>
  )

  const startEl = (
    <div className="start-container">
      <h1 className="start-title">QUIZZICAL</h1>
      <div className="settings-el">
        <Dropdown
          className="dropdown"
          placeholder="Select an option"
          options={typeOptions}
          value=""
          onChange={(value) => updateType(value)}
        />

        <Dropdown
          className="dropdown"
          placeholder="Difficulty"
          options={difficultyOptions}
          value="easy"
          onChange={(value) => updateDifficulty(value)}
        />
        <Dropdown
          className="dropdown"
          placeholder="Number of questions"
          options={amountOptions}
          value="6"
          onChange={(value) => updateAmount(value)}
        />

        <button className="startBtn" onClick={() => startGame()}>
          Start game
        </button>
      </div>
    </div>
  )

  return (
    <div className="container">
      <div className="blob-left"></div>
      <div className="blob-right"></div>
      {gameState === 0 && { startEl }}
      {gameState >= 1 && { quizEl }}
    </div>
  )
}

export default App
