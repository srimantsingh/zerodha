import React from "react";
function Education() {
  return (
    <div className="container p-5" style={{ color: "#424242" }}>
      <div className="row">
        <div className="col-6">
          <img src="/media/education.svg" alt="Education illustration"></img>
        </div>
        <div className="col-6 align-items-center">
          <h1>Free and open market education</h1>
          <p className="p-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="/products"
            className="text-decoration-none text-primary fw-bold"
          >
            Varsity <i className="fas fa-arrow-right"></i>
          </a>
          <p className="p-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="/products"
            className="text-decoration-none text-primary fw-bold"
          >
            TradingQ&A <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
