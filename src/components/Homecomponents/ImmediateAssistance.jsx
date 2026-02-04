import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './ImmediateAssistance.css';
export default function ImmediateAssistance() {
  return (
    <div className="container my-5">
      <div className="p-5 text-center text-white immediate-assistance-box">
        <h3 className="fw-bold">Need Emergency Assistance?
</h3>
        <p className="mb-1">
         We respond immediately to domestic & international human remains transfer requests, providing <br></br>on-call coordination for families worldwide.
        </p>

        <div className="d-flex justify-content-center gap-2 mt-3">
          {/* <button className="btn btn-light px-4">
    Call Now          </button> */}
    <a href="tel: +919833444040" className="btn btn-light px-4">
    24/7 Helpline
</a>
          {/* <input
            type="text"
            className="form-control w-auto"
            placeholder="Enter Details"
            style={{ minWidth: "200px" }}
          /> */}
        </div>
      </div>
    </div>
  );
}