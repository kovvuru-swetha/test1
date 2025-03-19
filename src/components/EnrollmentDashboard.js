import React from 'react';

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
            <p>{course.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default EnrollmentDashboard;