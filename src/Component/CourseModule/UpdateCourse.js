import React, { useState } from "react";
import "./UpdateCourse.modules.css";
import axios from "axios";

const UpdateCourse = () => {
  const initialValues = {
    courseId: "",
    fees: "",
  };
  const [updateCourse, setUpdateCourse] = useState(initialValues);
  const handleChange = (e) => {
    setUpdateCourse({ ...updateCourse, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!updateCourse.courseId && !updateCourse.fees) return;

    console.log(updateCourse);
    setUpdateCourse(initialValues);
    try {
      await axios.put(`http://localhost:9091/course/update/${updateCourse.courseId}/${updateCourse.fees}`);
      console.log("Course updated successfully");
      setUpdateCourse(initialValues);
    } catch (error) {
      console.error(error);
      // Handle error cases
    } 
  };

  return (
    <div>
      <h3 class="text-light fs-3 p-2 m-2">Update Course Fee</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={updateCourse.courseId}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div className="div-ele">
          <label className="label">Update Fee</label>
          <input
            className="input-box"
            type="text"
            name="fees"
            value={updateCourse.fees}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button class="btn btn-danger m-2">Update Course</button>
      </form>
    </div>
  );
};
export default UpdateCourse;