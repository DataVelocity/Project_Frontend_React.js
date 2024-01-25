import React, { useState } from "react";
import AssociateRegistration from "./AssociateRegistration";
import HighestFeeDetails from "./HighestFeeDetails";
import Makepayment from "./Makepayment";
import TotalFee from "./TotalFee";
import ViewFeedback from "./ViewFeedback";
import Addfeedback from "./Addfeedback";
const Admission = () => {
  const [associateRegBtn, setAssociateRegBtn] = useState(false);
  const [totlaFeebtn, setTotalFeeBtn] = useState(false);
  const [addFeedbackBtn, setAddFeedbackBtn] = useState(false);
  const [highestFeeDetailsBtn, setHighestFeeDetailsBtn] = useState(false);
  const [viewFeedBackBtn, setViewFeedBackBtn] = useState(false);
  const [makepaymentBtn, setMakePayment] = useState(false);

  const handleAssociateReg = () => {
    setAssociateRegBtn((currentAssociateReg) => !currentAssociateReg);
    totlaFeebtn && setTotalFeeBtn((currentTotalFee) => !currentTotalFee);
    addFeedbackBtn && setAddFeedbackBtn((currentFeedBack) => !currentFeedBack);
    highestFeeDetailsBtn &&
      setHighestFeeDetailsBtn(
        (currentHighFeeDetails) => !currentHighFeeDetails
      );
    viewFeedBackBtn &&
      setViewFeedBackBtn((currentViewFeedBack) => !currentViewFeedBack);
    makepaymentBtn &&
      setMakePayment((currentMakePayment) => !currentMakePayment);
  };
  const handleTotalFee = () => {
    associateRegBtn &&
      setAssociateRegBtn((currentAssociateReg) => !currentAssociateReg);
    setTotalFeeBtn((currentTotalFee) => !currentTotalFee);
    addFeedbackBtn && setAddFeedbackBtn((currentFeedBack) => !currentFeedBack);
    highestFeeDetailsBtn &&
      setHighestFeeDetailsBtn(
        (currentHighFeeDetails) => !currentHighFeeDetails
      );
    viewFeedBackBtn &&
      setViewFeedBackBtn((currentViewFeedBack) => !currentViewFeedBack);
    makepaymentBtn &&
      setMakePayment((currentMakePayment) => !currentMakePayment);
  };
  const handleAddFeedback = () => {
    associateRegBtn &&
      setAssociateRegBtn((currentAssociateReg) => !currentAssociateReg);
    totlaFeebtn && setTotalFeeBtn((currentTotalFee) => !currentTotalFee);
    setAddFeedbackBtn((currentFeedBack) => !currentFeedBack);
    highestFeeDetailsBtn &&
      setHighestFeeDetailsBtn(
        (currentHighFeeDetails) => !currentHighFeeDetails
      );
    viewFeedBackBtn &&
      setViewFeedBackBtn((currentViewFeedBack) => !currentViewFeedBack);
    makepaymentBtn &&
      setMakePayment((currentMakePayment) => !currentMakePayment);
  };
  const handleHighFeeDetails = () => {
    associateRegBtn &&
      setAssociateRegBtn((currentAssociateReg) => !currentAssociateReg);
    totlaFeebtn && setTotalFeeBtn((currentTotalFee) => !currentTotalFee);
    addFeedbackBtn && setAddFeedbackBtn((currentFeedBack) => !currentFeedBack);
    setHighestFeeDetailsBtn((currentHighFeeDetails) => !currentHighFeeDetails);
    viewFeedBackBtn &&
      setViewFeedBackBtn((currentViewFeedBack) => !currentViewFeedBack);
    makepaymentBtn &&
      setMakePayment((currentMakePayment) => !currentMakePayment);
  };
  const handleViewFeedBack = () => {
    associateRegBtn &&
      setAssociateRegBtn((currentAssociateReg) => !currentAssociateReg);
    totlaFeebtn && setTotalFeeBtn((currentTotalFee) => !currentTotalFee);
    addFeedbackBtn && setAddFeedbackBtn((currentFeedBack) => !currentFeedBack);
    highestFeeDetailsBtn &&
      setHighestFeeDetailsBtn(
        (currentHighFeeDetails) => !currentHighFeeDetails
      );
    setViewFeedBackBtn((currentViewFeedBack) => !currentViewFeedBack);
    makepaymentBtn &&
      setMakePayment((currentMakePayment) => !currentMakePayment);
  };
  const handleMakepayment = () => {
    associateRegBtn &&
      setAssociateRegBtn((currentAssociateReg) => !currentAssociateReg);
    totlaFeebtn && setTotalFeeBtn((currentTotalFee) => !currentTotalFee);
    addFeedbackBtn && setAddFeedbackBtn((currentFeedBack) => !currentFeedBack);
    highestFeeDetailsBtn &&
      setHighestFeeDetailsBtn(
        (currentHighFeeDetails) => !currentHighFeeDetails
      );
    viewFeedBackBtn &&
      setViewFeedBackBtn((currentViewFeedBack) => !currentViewFeedBack);
    setMakePayment((currentMakePayment) => !currentMakePayment);
  };
  return (
    <div class="bg-secondary">
      <h2 class="text-info fs-3 p-2">ADMISSION DETAILS</h2>
      <button class="btn btn-warning text-light" onClick={handleAssociateReg}>
        Associate Registration
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleTotalFee}>
        Total Fees
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleAddFeedback}>
        Add Feedback
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleHighFeeDetails}>
        Highest Fee Details
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleViewFeedBack}>
        View Feedback
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleMakepayment}>
        Make Payment
      </button>
      &nbsp;
      {associateRegBtn && <AssociateRegistration />}
      {totlaFeebtn && <TotalFee />}
      {addFeedbackBtn && <Addfeedback />}
      {highestFeeDetailsBtn && <HighestFeeDetails />}
      {makepaymentBtn && <Makepayment />}
      {viewFeedBackBtn && <ViewFeedback />}
    </div>
  );
};
export default Admission;
