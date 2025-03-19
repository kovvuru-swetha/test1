import React from 'react';

const Course = ({ course, onEnroll }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      {!course.enrolled ? (
        <button onClick={onEnroll}>Enroll</button> // Call onEnroll when clicked
      ) : (
        <span>Enrolled</span>
      )}
    </div>
  );
};

export default Course;