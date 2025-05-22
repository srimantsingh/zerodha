import React from "react";

function OpenAccount() {
  return (
    <div className="container" style={{ color: "#424242" }}>
      <h1 className="semi-bold text-center">Open a Zerodha account</h1>
      <p className=" fs-5 semi-bold text-center">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button
        className="btn btn-lg d-block mx-auto w-25"
        style={{ backgroundColor: "#387ED1", color: "#fff" }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default OpenAccount;
