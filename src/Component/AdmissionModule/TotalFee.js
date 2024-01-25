import React, { useState } from "react";
import "./TotalFee.modules.css";
import axios from "axios";

const TotalFee = () => {
  const initialValues = {
    associateId: "",
    fees:"",
  };
  const [totalFee, setTotalFee] = useState(initialValues);
  const [fee, setFee] = useState(null);

  const handleChange = (e) => {
    setTotalFee({ ...totalFee, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!totalFee.associateId) return;
    console.log(totalFee);
    setTotalFee(initialValues);

    try {
      const response = await axios.put(
        `http://localhost:9093/admission/calculateFees/${totalFee.associateId}`
      );
      const feeData = response.data;
      console.log(feeData);     
      // setTotalFee({ ...totalFee, fees: feeData.fees }); // Update the fees key only
      setFee(feeData);
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Total Fee Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={totalFee.associateId}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
      </form>
      {fee && (
      <div>
        <p>Total Fee: {fee}</p>
      </div>
    )}
    </div>
  );
};
export default TotalFee;