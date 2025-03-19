import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Progress from '../components/Progress';

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You must be logged in to view this course.');
          return;
        }

        const response = await axios.get(`https://localhost:7185/api/Course/${courseId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error);
        setError('Failed to fetch course. Please try again later.');
      }
    };

    fetchCourse();
  }, [courseId]);

  if (error) return <div>{error}</div>;
  if (!course) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <Progress progress={course.progress} />
      <a href={`/courses/${courseId}/quiz`}>Take Quiz</a>
    </div>
  );
};

export default CoursePage;