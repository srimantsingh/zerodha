import React from "react";
function Pricing() {
  return (
    <div className="container  p-5" style={{ color: "#424242" }}>
      <div className="row">
        <div className="col-6">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price<br></br>
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="/products" className="text-decoration-none text-primary fw-bold">
  See Pricing <i class="fas fa-arrow-right"></i>
</a>
        </div>
        <div className="col-2">
          <img
            src="/media/pricing0.svg"
            style={{ width: "70%" }}
            alt="Pricing illustration"
          ></img>
          <p className="mb-0 fw-semi-short text-muted">Free account opening </p>
        </div>

        <div className="col-2">
          <img
            src="/media/pricingEquity.svg"
            style={{ width: "70%" }}
            alt="Pricing illustration"
          ></img>
          <p className="mb-0 fw-semi-short text-muted">
            Free equity delivery and direct mutual funds{" "}
          </p>
        </div>

        <div className="col-2  align-items-center">
          <img
            src="/media/intradayTrades.svg"
            style={{ width: "70%" }}
            alt="Pricing illustration"
          />

          <p className="mb-0 fw-semi-short text-muted">intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
