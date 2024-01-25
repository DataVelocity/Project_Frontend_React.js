import React, { useState } from "react";
import "./AssociateRegistration.modules.css";
import axios from "axios";

const AssociateRegistration = () => {
  const initialValues = {
    courseId: "",
    associateId: "",
    fees:"",
    feedback: "",
  };
  const [associateReg, setAssociateReg] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setAssociateReg({ ...associateReg, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!associateReg.courseId && !associateReg.associateId) return;
    console.log(associateReg);
    setAssociateReg(initialValues);

    try {
      await axios.post(`http://localhost:9093/admission/register/${associateReg.associateId}/${associateReg.courseId}`, associateReg);
      console.log("Registered successfully");
      setAssociateReg(initialValues);
      setSuccessMessage("Registered successfully");
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };
  return (
    <div>
      <div>
        <h3 class="text-light fs-3 m-2 ">Associate Registration Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-ele">
            <label className="label">Course Id </label>
            <input
              className="input-box"
              type="text"
              name="courseId"
              value={associateReg.courseId}
              onChange={handleChange}
              required

            />
          </div>
          <br />
          <div className="input-ele">
            <label className="label">Associate Id </label>
            <input
              className="input-box"
              type="text"
              name="associateId"
              value={associateReg.associateId}
              onChange={handleChange}
              required

            />
          </div>
          <br />
          <div className="input-ele">
            <label className="label"> Fees </label>
            <input
              className="input-box"
              type="text"
              name="fees"
              value={associateReg.fees}
              onChange={handleChange}
              required

            />
          </div>
          <div className="input-ele">
            <label className="label"> Feedback</label>
            <input
              className="input-box"
              type="text"
              name="feedback"
              value={associateReg.feedback}
              onChange={handleChange}
              required

            />
          </div>
          <br />
          <button class="btn btn-danger m-2">Register Now</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}

      </div>
    </div>
  );
};
export default AssociateRegistration;
