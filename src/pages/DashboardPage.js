import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Course from '../components/Course';
import EnrollmentDashboard from '../components/EnrollmentDashboard';

const DashboardPage = () => {
  console.log("DashboardPage rendered");
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_COURSES_API', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENROLLED_COURSES_API', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setEnrolledCourses(response.data);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchCourses();
    fetchEnrolledCourses();
  }, []);

  const handleEnroll = (enrolledCourse) => {
    setEnrolledCourses((prev) => [...prev, enrolledCourse]);
    setCourses((prev) =>
      prev.map((course) =>
        course.id === enrolledCourse.id ? { ...course, enrolled: true } : course
      )
    );
  };

  return (
    <div className="container">
      <h1>E-Learning Dashboard</h1>
      <h2>Available Courses</h2>
      <div className="flex-wrap">
        {courses.map((course) => (
          <Course key={course.id} course={course} onEnroll={handleEnroll} />
        ))}
      </div>
      <EnrollmentDashboard enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default DashboardPage;