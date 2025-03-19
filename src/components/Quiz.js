import React, { useState } from 'react';
import axios from 'axios';

const Quiz = ({ quiz }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = async () => {
    if (!selectedOption) {
      alert('Please select an option!');
      return;
    }
    try {
      const response = await axios.post('YOUR_BACKEND_QUIZ_API', {
        quizId: quiz.id,
        selectedOption,
      });
      alert('Quiz submitted successfully!');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz.');
    }
  };

  return (
    <div className="quiz-card">
      <h3>{quiz.question}</h3>
      {quiz.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name={`quiz-${quiz.id}`}
            value={option}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;