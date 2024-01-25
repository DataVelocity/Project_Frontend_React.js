import React, { useState } from "react";
import axios from "axios";
import "./Addcourse.modules.css";

const Addcourse = () => {
  const initialValues = {
    courseId: "",
    courseName: "",
    fees: "",
    duration: "",
    courseType: "",
    rating:"",
  };

  const [addUser, setAddUser] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !addUser.courseId &&
      !addUser.courseName &&
      !addUser.fees &&
      !addUser.duration &&
      !addUser.courseType &&
      !addUser.rating
    )
      return;

    try {
      await axios.post("http://localhost:9091/course/addCourse", addUser);
      console.log("Course added successfully");
      setAddUser(initialValues);
      setSuccessMessage("Course has been added successfully");
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };

  return (
    <div className="add-course-container">
      <h3 className="text-light fs-3 p-3">Add Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-element">
          <label className="label">Course Id</label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={addUser.courseId}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Course Name</label>
          <input
            className="input-box"
            type="text"
            name="courseName"
            value={addUser.courseName}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Fees</label>
          <input
            className="input-box"
            type="text"
            name="fees"
            value={addUser.fees}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Duration In Months</label>
          <input
            className="input-box"
            type="text"
            name="duration"
            value={addUser.duration}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Course Type</label>
          <input
            className="input-box"
            type="text"
            name="courseType"
            value={addUser.courseType}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <div className="input-element">
          <label className="label">Rating</label>
          <input
            className="input-box"
            type="text"
            name="rating"
            value={addUser.rating}
            onChange={handleChange}
            required
          />
        </div>
        <br />


        <button className="btn btn-danger m-2">Add Course</button>
      </form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};

export default Addcourse;
