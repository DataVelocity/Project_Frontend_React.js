import React, { useState } from "react";
import "./Updateassociate.modules.css";
import axios from "axios";


const Updateassociate =  () => {
  const initialValues = {
    associateId: "",
    associateAddress: "",
  };
  const [updateAss, setUpdateAss] = useState(initialValues);
  const handleChange = (event) => {
    setUpdateAss({ ...updateAss, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!updateAss.associateId && !updateAss.associateAddress) return;
    console.log(updateAss);
    setUpdateAss(initialValues);


    try {
      await axios.put(`http://localhost:9092/associate/updateAssociate/${updateAss.associateId}/${updateAss.associateAddress}`);
      console.log("Associate updated successfully");
      setUpdateAss(initialValues);
    } catch (error) {
      console.error(error);
      // Handle error cases
    } 
  };

  return (
    <div>
      <h3 class="text-light fs-3 p-2 m-2">Update Associate Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={updateAss.associateId}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <div className="input-ele">
          <label className="label">Update Address</label>
          <input
            className="input-box"
            type="text"
            name="associateAddress"
            value={updateAss.associateAddress}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <button class="btn btn-danger m-2">Update Address</button>
      </form>
    </div>
  );
};
export default Updateassociate;
