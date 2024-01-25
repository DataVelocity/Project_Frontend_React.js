import React, { useState } from "react";
import './ViewFeedbacktracking.modules.css'
import axios from "axios";

const ViewFeedbacktracking = () => {
  const initialValues = {
    courseId: "",
  };
  const [viewFeedBack, setViewFeedback] = useState(initialValues);
  const [course, setCourse] = useState(null);

  const handleChange = (e) => {
    setViewFeedback({ ...viewFeedBack, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!viewFeedBack.courseId) return;
    
    try {
      const response = await axios.get(
        `http://localhost:9091/course/viewFeedback/${viewFeedBack.courseId}`
      );
      const courseData = response.data;
      setCourse(courseData); 
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
    console.log(course);
    setViewFeedback(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">Course FeedBack Rating</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={viewFeedBack.courseId}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
      </form>
      {course && (
        <div>
          {/* <p>Course Id: {course.courseId}</p> */}
          <p>Feedback Rating: {course}</p>
        </div>
      )}

    </div>
  );
};
export default ViewFeedbacktracking;
