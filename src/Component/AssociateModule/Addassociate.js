import React, { useState } from "react";
import "./Addassociate.modules.css";
import axios from "axios";

const Addassociate = () => {
  const initialValues = {
    associateId: "",
    associateName: "",
    associateAddress: "",
    associateEmailId: "",
  };
  const [addAssociate, setAddAssociate] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = async (e) => {
    setAddAssociate({ ...addAssociate, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !addAssociate.associateId &&
      !addAssociate.associateName &&
      !addAssociate.associateAddress &&
      !addAssociate.associateEmailId
    )
    
      return;
      try {
        await axios.post("http://localhost:9092/associate/addAssociate", addAssociate);
        console.log("Associate added successfully");
        setAddAssociate(initialValues);
        setSuccessMessage("Associate has been added successfully");

      } catch (error) {
        console.error(error);
        // Handle error cases
      }
    console.log(addAssociate);
    setAddAssociate(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 p-3">Add Associate Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={addAssociate.associateId}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <div className="input-ele">
          <label className="label">Name </label>
          <input
            className="input-box"
            type="text"
            name="associateName"
            value={addAssociate.associateName}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <div class="input-ele">
          <label className="label">Address</label>
          <input
            className="input-box"
            type="text"
            name="associateAddress"
            value={addAssociate.associateAddress}
            onChange={handleChange}
            required

          />
        </div>

        <br />

        <div className="input-ele">
          <label className="label">Email Id</label>
          <input
            className="input-box"
            type="text"
            name="associateEmailId"
            value={addAssociate.associateEmailId}
            onChange={handleChange}
            required

          />
        </div>
        <br />

        <br />
        <button class="btn btn-danger m-2">Add </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}

    </div>
  );
};
export default Addassociate;