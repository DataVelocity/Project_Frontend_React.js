import React, { useState } from "react";
import "./Makepayment.modules.css";
import axios from "axios";

const Makepayment = () => {
  const initialValues = {
    registrationId: "",
    courseId: "",
    associateId: "",
    fee: "",
  };
  const [makePayment, setMakePayment] = useState(initialValues);
  const handleChange = (e) => {
    setMakePayment({ ...makePayment, [e.target.name]: e.target.value });
  };


  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !makePayment.registrationId &&
      !makePayment.courseId &&
      !makePayment.associateId
    )
      return;
    console.log(makePayment);
    setMakePayment(initialValues);
  
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
  
    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }
  
    const options = {
      key: "rzp_test_h6DH2sKalGuwIA", // Replace with your Razorpay API key
      amount: makePayment.fee * 100, // Amount in paisa (multiply by 100 for converting to rupees)
      currency: "INR",
      name: "Course Management System",
      description: "Payment for Registered Course",
      handler: function (response) {
        // Handle the payment success response
        console.log(response);
        // Perform any necessary actions after successful payment
      },
      prefill: {
        email: "user@example.com", 
        contact: "9876543210", 
      },
    };
  
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Make Payment For Registered Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Registration Id </label>
          <input
            className="input-box"
            type="text"
            name="registrationId"
            value={makePayment.registrationId}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={makePayment.courseId}
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
            value={makePayment.associateId}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">Fees </label>
          <input
            className="input-box"
            type="text"
            name="fee"
            value={makePayment.fee}
            onChange={handleChange}
            required

          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Pay Now</button>
      </form>
    </div>
  );
};
export default Makepayment;
