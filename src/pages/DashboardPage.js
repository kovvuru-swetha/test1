import React, { useState } from 'react';
import Course from '../components/Course';
import EnrollmentDashboard from '../components/EnrollmentDashboard';

const DashboardPage = () => {
  console.log("DashboardPage rendered");

  // Mock data for courses
  const mockCourses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming.',
      enrolled: false,
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      enrolled: false,
    },
    {
      id: 3,
      title: 'React for Beginners',
      description: 'Learn React from scratch.',
      enrolled: false,
    },
  ];

  // Initialize state with mock data
  const [courses, setCourses] = useState(mockCourses);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Handle enrollment
  const handleEnroll = (courseId) => {
    // Find the course to enroll
    const courseToEnroll = courses.find((course) => course.id === courseId);

    if (courseToEnroll && !courseToEnroll.enrolled) {
      // Mark the course as enrolled
      const updatedCourses = courses.map((course) =>
        course.id === courseId ? { ...course, enrolled: true } : course
      );

      // Add the course to the enrolled list
      setEnrolledCourses((prev) => [...prev, courseToEnroll]);

      // Update the courses state
      setCourses(updatedCourses);
    }
  };

  return (
    <div className="container">
      <h1>E-Learning Dashboard</h1>
      <h2>Available Courses</h2>
      <div className="flex-wrap">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            onEnroll={() => handleEnroll(course.id)} // Pass the course ID to handleEnroll
          />
        ))}
      </div>
      <EnrollmentDashboard enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default DashboardPage;