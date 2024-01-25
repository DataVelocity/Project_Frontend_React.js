import React, { useState } from "react";
import "./Viewcourse.modules.css";
import axios from "axios";

const ViewCourse = () => {
  const initialValues = {
    courseId: "",
  };
  const [ViewCourse, setViewCourse] = useState(initialValues);
  const [course, setCourse] = useState(null);

  const handleChange = (e) => {
    setViewCourse({ ...ViewCourse, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ViewCourse.courseId) return;
    console.log(ViewCourse);
    setViewCourse(initialValues);

    try {
      const response = await axios.get(
        `http://localhost:9091/course/viewByCourseId/${ViewCourse.courseId}`
      );
      const courseData = response.data;
      setCourse(courseData); // Corrected variable name
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">View Course By Id</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>

          <input
            className="input-box"
            type="text"
            name="courseId"
            value={ViewCourse.courseId}
            onChange={handleChange}
            required

          />
        </div>

        <br />
        <button class="btn btn-danger m-2">View Course</button>
      </form>
      {course && (
        <div className="table-container">
          <h4>Course Details:</h4>
          <table className="table-bordered">
            <thead>
              <tr>
                <th>Course Id</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Course Type </th>
                <th>Fees</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.duration}</td>
                <td>{course.courseType}</td>
                <td>{course.fees}</td>
                <td>{course.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
export default ViewCourse;
