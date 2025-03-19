import React, { useState } from 'react';

const CreateCoursePage = () => {
  const [courseData, setCourseData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Instead of sending data to the backend, just display it in an alert or log it
    alert(`Course Created Successfully!\nTitle: ${courseData.title}\nDescription: ${courseData.description}`);    console.log('Course Data:', courseData);

    // Optionally, you can reset the form after submission
    setCourseData({ title: '', description: '' });

    // Optionally, redirect the user to another page
    // window.location.href = '/';
  };

  return (
    <div className="form-container">
      <h1>Create a New Course</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            rows="4"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCoursePage;