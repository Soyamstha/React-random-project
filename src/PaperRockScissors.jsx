import React, { useState } from "react";
import "./PaperRockScissors.css";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

export default function Main() {
  return (
    <div className="container">
      <h1>Paper Rock Scissors Game</h1>
      <PlayerChooser />
    </div>
  );
}

function PlayerChooser() {
  const [activePlayer, setActivePlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setActivePlayer(player);
  };

  const closeModal = () => {
    setActivePlayer(null);
  };

  return (
    <div className="button-container">
      <button className="btn" onClick={() => handlePlayerClick("1 Player")}>
        1 Player <IoPersonOutline size={24} />
      </button>
      <button className="btn" onClick={() => handlePlayerClick("2 Player")}>
        2 Player <IoPersonOutline size={24} />
      </button>

      {activePlayer && (
        <Modal onClose={closeModal}>
          <Game mode={activePlayer} onExit={closeModal} />
        </Modal>
      )}
    </div>
  );
}

function Game({ mode, onExit }) {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["Rock", "Paper", "Scissors"];

  const renderIcon = (choice) => {
    switch (choice) {
      case "Rock":
        return <FaHandRock className="icon" size={50} />;
      case "Paper":
        return <FaHandPaper className="icon" size={50} />;
      case "Scissors":
        return <FaHandScissors className="icon" size={50} />;
      default:
        return null;
    }
  };

  const playRound = (choice) => {
    setPlayer1Choice(choice);
    if (mode === "1 Player") {
      const cpuChoice = choices[Math.floor(Math.random() * 3)];
      setPlayer2Choice(cpuChoice);
      setResult(getWinner(choice, cpuChoice, mode));
    }
  };

  const playTwoPlayer = (choice) => {
    if (!player1Choice) {
      setPlayer1Choice(choice);
    } else {
      setPlayer2Choice(choice);
      setResult(getWinner(player1Choice, choice, mode));
    }
  };

  const resetGame = () => {
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setResult(null);
  };

  return (
    <div>
      <h2>{mode}</h2>
      {!result && (
        <>
          <p>
            {!player1Choice
              ? "Player 1's Turn"
              : mode === "2 Player"
              ? "Player 2's Turn"
              : "CPU is choosing..."}
          </p>
          <div className="choice-container">
            {choices.map((c) => (
              <button
                key={c}
                className="choice-btn"
                onClick={() =>
                  mode === "1 Player" ? playRound(c) : playTwoPlayer(c)
                }
              >
                {renderIcon(c)}
              </button>
            ))}
          </div>
        </>
      )}

      {result && (
        <>
          <h3>Results:</h3>
          <p>
            Player 1 chose: {renderIcon(player1Choice)}
          </p>
          <p>
            {mode === "1 Player" ? "CPU" : "Player 2"} chose:{" "}
            {renderIcon(player2Choice)}
          </p>
          <h2>{result}</h2>
          <button className="btn" onClick={resetGame}>
            Play Again
          </button>
        </>
      )}

      <button className="exit-btn" onClick={onExit}>
        Exit
      </button>
    </div>
  );
}

function getWinner(p1, p2, mode) {
  if (p1 === p2) return "It's a Draw!";
  if (
    (p1 === "Rock" && p2 === "Scissors") ||
    (p1 === "Paper" && p2 === "Rock") ||
    (p1 === "Scissors" && p2 === "Paper")
  ) {
    return mode === "1 Player" ? "You Win! 🎉" : "Player 1 Wins! 🎉";
  }
  return mode === "1 Player" ? "CPU Wins! 💻" : "Player 2 Wins! 🎉";
}

function Modal({ children, onClose }) {
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
