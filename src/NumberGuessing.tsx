import React, { useState } from "react";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const NumberGuessingGame: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState<number>(getRandomNumber());
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);

  const handleGuess = () => {
    const numericGuess = parseInt(guess);
    if (isNaN(numericGuess)) {
      setMessage("Please enter a valid number.");
      return;
    }

    setAttempts(attempts + 1);

    if (numericGuess < targetNumber) {
      setMessage("Too low! Try a higher number.");
    } else if (numericGuess > targetNumber) {
      setMessage("Too high! Try a lower number.");
    } else {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts.`);
    }
  };

  const handleRestart = () => {
    setTargetNumber(getRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className="text-center p-6 bg-white rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-4">🎯 Number Guessing Game</h2>
        <p className="mb-4">Guess a number between 1 and 100</p>

        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          className="p-2 mb-4 text-xl border-2 border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <br />
        <button
          onClick={handleGuess}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
        >
          Guess
        </button>
        <p className="my-4 text-lg">{message}</p>
        <button
          onClick={handleRestart}
          className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
        >
          🔁 Restart
        </button>
      </div>
    </div>
  );
};

export default NumberGuessingGame;
