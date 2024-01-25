import React, { useState } from "react";
import "./Addfeedback.modules.css";
import axios from "axios";
const Addfeedback = () => {
  const initialValues = {
    registrationNo: "",
    feedback: "",
    feedbackRating: "",
  };
  const [addFeedback, setAddFeedBack] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setAddFeedBack({ ...addFeedback, [e.target.name]: e.target.value });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (
      !addFeedback.registrationNo &&
      !addFeedback.feedback &&
      !addFeedback.feedbackRating
    )
      return;
      try {
        await axios.post(`http://localhost:9093/admission/feedback/${addFeedback.registrationNo}/${addFeedback.feedback}/${addFeedback.feedbackRating}`);
        console.log("Feedback added successfully");
        setAddFeedBack(initialValues);
        setSuccessMessage("Feedback added successfully");
      } catch (error) {
        console.error(error);
        // Handle error cases
      }

    console.log(addFeedback);
    setAddFeedBack(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Add Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Registration Number </label>
          <input
            className="input-box"
            type="text"
            name="registrationNo"
            value={addFeedback.registrationNo}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">FeedBack Comments </label>
          <input
            className="input-box"
            type="text"
            name="feedback"
            value={addFeedback.feedback}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">FeedBack Rating</label>
          <input
            className="input-box"
            type="text"
            name="feedbackRating"
            value={addFeedback.feedbackRating}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}

    </div>
  );
};
export default Addfeedback;
