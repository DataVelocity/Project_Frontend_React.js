import React, { useState } from "react";
import "./ViewFeedback.modules.css";
import axios from "axios";

const ViewFeedback = () => {
  const initialValues = {
    courseId: "",
  };
  const [viewFeedback, setViewFeedback] = useState(initialValues);
  const [feedback, setFeedback] = useState(null);


  const handleChange = (e) => {
    setViewFeedback({ ...viewFeedback, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!viewFeedback.courseId) return;
    console.log(viewFeedback);
    setViewFeedback(initialValues);
    try {
      const response = await axios.get(
        `http://localhost:9093/admission/viewFeedbackByCourseId/${viewFeedback.courseId}`
      );
      const fdback = response.data;
      setFeedback(fdback); 
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
    console.log(feedback);
    setViewFeedback(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">View Course Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={viewFeedback.courseId}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Get FeedBack</button>
      </form>
      {feedback && (
        <div>
          {/* <p>Course Id: {course.courseId}</p> */}
          <p>Feedback : {feedback}</p>
        </div>
      )}
    </div>
  );
};
export default ViewFeedback;