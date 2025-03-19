import React from 'react';
import Quiz from '../components/Quiz';

const QuizPage = () => {
  // Mock quiz data
  const quizzes = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'Which language is used for web development?',
      options: ['Java', 'Python', 'JavaScript', 'C++'],
      correctAnswer: 'JavaScript',
    },
    {
      id: 3,
      question: 'What is React?',
      options: ['A programming language', 'A library for building user interfaces', 'A database', 'A framework'],
      correctAnswer: 'A library for building user interfaces',
    },
  ];

  return (
    <div className="container">
      <h1>Course Quiz</h1>
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizPage;