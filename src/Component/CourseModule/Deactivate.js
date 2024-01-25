import React, { useState } from "react";
import "./Deactive.modules.css";
import axios from "axios";

const Deactivate = () => {
  const initialValues = {
    courseId: "",
  };
  const [courseDeactivate, setCourseDeactivate] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");


  const handleChange = (e) => {
    setCourseDeactivate({
      ...courseDeactivate,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!courseDeactivate.courseId) return;
    console.log(courseDeactivate);
    setCourseDeactivate(initialValues);
    try {
      const response = await axios.delete(
        `http://localhost:9091/course/deactivate/${courseDeactivate.courseId}`
      );
      // const courseData = response.data;
      // setCourse(courseData); // Corrected variable name
      setSuccessMessage("Course has been deleted successfully");

    } catch (error) {
      console.error(error);
      // Handle error cases
    }

  };
  return (
    <div class="main">
      <h3 class="text-light fs-3 m-2 ">Course Deactivate</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={courseDeactivate.courseId}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Deactivate Course</button>
      </form>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};
export default Deactivate;
