import React from "react";

function Hero() {
  return (
    <>
      <div
        style={{
          // minHeight: "100vh", // full viewport height
          backgroundColor: "#387ed1",
          color: "white",
          padding: "30px",
        }}
      >
        <div className="container ">
          <div className="row  d-flex align-items-stretch">
            {/* Left Section */}
            <div className="col-md-8 ">
              <h2 className="p-5">Support Portal</h2>
              <h4 className="p-5">Search for an answer or browse help topics to create a ticket</h4>

              {/* Search Bar */}
              <div className="input-group mt-4">
                <span className="input-group-text" id="search-icon">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                  aria-describedby="search-icon"
                />
              </div>

              {/* Quick Links */}
              <div className="row mt-4">
                {[
                  "Track account opening",
                  "Track segment activation",
                  "Intraday margins",
                  "Kite user manual",
                ].map((item, index) => (
                  <div className="col-md-6 col-lg-4 mb-2" key={index}>
                    <a style={{ color: "white", fontSize: "16px" }} href="#">
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="col-4 md-4 mt-4 mt-md-0">
              <h2>
                <a className="p-5 " style={{  textDecoration: "underline", color: "white" }} href="#">
                  Track tickets
                </a>
              </h2>
              <h4 className="" style={{ fontSize: "22px" }}>Featured</h4>
              <ul>
                <li>Latest Intraday leverages and Square-off timings</li>
                <li>Surveillance measure on scrips - May 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;


