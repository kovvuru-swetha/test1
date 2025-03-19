import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Progress from '../components/Progress';

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`YOUR_BACKEND_COURSE_API/${courseId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourse();
  }, [courseId]);

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