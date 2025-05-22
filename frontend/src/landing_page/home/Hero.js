import React from "react";
function Hero() {
  return (
    <div className="container b-5">
      <div className="row text-center">
        <img
          src="/media/landing.png"
          alt="Landing page illustration"
          className="mb-5"
        ></img>
        <h1 className="  text-center" style={{ color: "#424242" }}>
          <i className="fas fa-chart-line me-2"></i>
          Invest in everything
        </h1>
        <p style={{ color: "#424242" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-lg d-block mx-auto w-25"
          style={{ backgroundColor: "#387ED1", color: "#fff" }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Hero;
