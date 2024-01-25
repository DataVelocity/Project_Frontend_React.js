import React, { useState } from "react";
import "./HighestFeeDetails.modules.css";
import axios from "axios";

const HighestFeeDetails = () => {
  const initialValues = {
    associateId: "",
  };
  const [highestFee, setHighestFee] = useState(initialValues);
  const [course, setCourse] = useState(null);

  const handleChange = (e) => {
    setHighestFee({ ...highestFee, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!highestFee.associateId) return;
    console.log(highestFee);
    setHighestFee(initialValues);

    try {
      const response = await axios.get(
        `http://localhost:9093/admission/highestFee/${highestFee.associateId}`
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
      <h3 class="text-light fs-3 m-2 ">Associate Highest Fee</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={highestFee.associateId}
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
          <p>Highest Fee : {course.fees}</p>
        </div>
      )}
    </div>
  );
};
export default HighestFeeDetails;
