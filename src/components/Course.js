import React from 'react';
import axios from 'axios';

const Course = ({ course, onEnroll }) => {
  const handleEnroll = async () => {
    try {
      const response = await axios.post('YOUR_BACKEND_ENROLL_API', { courseId: course.id });
      onEnroll(response.data);
      alert('Enrolled successfully!');
    } catch (error) {
      console.error('Error enrolling:', error);
      alert('Failed to enroll.');
    }
  };

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button onClick={handleEnroll} disabled={course.enrolled}>
        {course.enrolled ? 'Enrolled' : 'Enroll'}
      </button>
    </div>
  );
};

export default Course;