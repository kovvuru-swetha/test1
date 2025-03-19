import React from 'react';
import Progress from './Progress';

const EnrollmentDashboard = ({ enrolledCourses }) => {
  return (
    <div className="enrollment-dashboard">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        enrolledCourses.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <Progress progress={course.progress} />
            <a href={`/courses/${course.id}`}>View Course</a>
          </div>
        ))
      )}
    </div>
  );
};

export default EnrollmentDashboard;