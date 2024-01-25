import React, { useState } from "react";
import axios from "axios";
import "./Viewassociate.modules.css";


const Viewassociate = () => {
  const initialValues = {
    associateId: "",
  };
  const [viewAssociate, setViewAssociate] = useState(initialValues);
  const [associate, setAssociate] = useState(null);

  const handleChange = (e) => {
    setViewAssociate({ ...viewAssociate, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!viewAssociate.associateId) return;
    console.log(associate);
    setViewAssociate(initialValues);

    try {
      const response = await axios.get(
        `http://localhost:9092/associate/viewByAssociateId/${viewAssociate.associateId}`
      );
      const associateData = response.data;
      setAssociate(associateData); // Corrected variable name
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };

  return (
    <div className="container">
      <h3 className="text-light fs-3 m-2">View Associate By Associate Id</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={viewAssociate.associateId}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <button className="btn btn-danger m-2" type="submit">
          Get Details
        </button>
      </form>

      {associate && (
        <div className="table-container">
          <h4>Associate Details:</h4>
          <table className="table-bordered">
            <thead>
              <tr>
                <th>Associate Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Email Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{associate.associateId}</td>
                <td>{associate.associateName}</td>
                <td>{associate.associateAddress}</td>
                <td>{associate.associateEmailId}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Viewassociate;
