import React, { useState } from 'react';

const Quiz = ({ quiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelection = (option) => {
    if (!isSubmitted) {
      setSelectedAnswer(option);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="quiz-card">
      <h3>{quiz.question}</h3>
      <ul>
        {quiz.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerSelection(option)}
            style={{
              backgroundColor:
                isSubmitted && option === quiz.correctAnswer
                  ? 'lightgreen'
                  : isSubmitted && option === selectedAnswer
                  ? 'lightcoral'
                  : selectedAnswer === option
                  ? 'lightblue'
                  : 'white',
              cursor: isSubmitted ? 'not-allowed' : 'pointer',
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      {!isSubmitted && (
        <button onClick={handleSubmit} disabled={!selectedAnswer}>
          Submit
        </button>
      )}
      {isSubmitted && (
        <p>
          {selectedAnswer === quiz.correctAnswer
            ? 'Correct!'
            : `Incorrect. The correct answer is: ${quiz.correctAnswer}`}
        </p>
      )}
    </div>
  );
};

export default Quiz;