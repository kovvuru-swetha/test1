import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Quiz from '../components/Quiz';

const QuizPage = () => {
  const { courseId } = useParams();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`YOUR_BACKEND_QUIZ_API/${courseId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, [courseId]);

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