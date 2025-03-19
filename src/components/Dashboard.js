import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Course from './Course';
import EnrollmentDashboard from './EnrollmentDashboard';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_COURSES_API');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENROLLED_COURSES_API');
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">E-Learning Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-2">Available Courses</h2>
      <div className="flex flex-wrap">
        {courses.map((course) => (
          <Course key={course.id} course={course} onEnroll={handleEnroll} />
        ))}
      </div>
      <EnrollmentDashboard enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default Dashboard;