import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      alert("OTP sent to " + mobile); // Replace with actual API
    } else {
      alert("Please enter a valid 10-digit number.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      alert("✅ OTP Verified!");
    } else {
      alert("❌ Invalid OTP!");
    }
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        {/* Left Side: Info and Image */}
        <div className="col-md-6 text-center mb-4">
          <h1>Open a free demat and trading account online</h1>
          <p>
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders.
          </p>
          <img src="/media/Signup.png" alt="Signup" className="img-fluid" />
        </div>

        {/* Right Side: Signup Form */}
        {/* <div className="col-6 md-6 p-4 shadow rounded bg-light"> */}
        <div className="col-lg-4 col-md-6 col-12 mx-auto">
          <h2 className="mb-3">Sign up now</h2>
          <p className="text-muted">Or track your existing application</p>

          {/* Phone Input with Flag */}
          <label className="mb-1 fw-bold">Mobile Number</label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                width="20"
                className="me-1"
              />
              +91
            </span>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter mobile number"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

  {!otpSent ? (
    <button
      className="btn btn-primary d-flex justify-content-center align-items-center"
      style={{ width: "220px", height: "60px", borderRadius: "1px" }}
      onClick={handleSendOtp}
    >
      Get OTP
    </button>
  ) : (
            <>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                className="btn btn-success w-100"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
