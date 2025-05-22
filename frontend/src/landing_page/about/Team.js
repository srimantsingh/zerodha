
import React from "react";

function Team() {
  return (
    <div className="container">
      <h1>
        <span
          className="text-center d-block"
          style={{
            color: "#424242",
            marginTop: "8rem",
          }}
        >
          People
        </span>
      </h1>

      <div className="row justify-content-center">
        {/* Image + Name Section */}
        <div className="col-4 text-center">
          <img
            src="/media/nithin.jpg"
            className="rounded-circle"
            style={{
              width: "315px",
              height: "315px",
              objectFit: "cover",
              marginTop: "70px",
            }}
            alt="Profile"
          />

          {/* Name and Role below image */}
          <div style={{ marginTop: "15px" }}>
            <h5 className="mb-1">Nithin Kamath</h5>
            <p className="mb-0">Founder, CEO</p>
          </div>
        </div>

        {/* Description Section */}
        <div
          className="col-5"
          style={{
            color: "#424242",
            fontSize: "19px",
            marginTop: "4rem",
          }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a className="text-decoration-none" href="/Homepage">
              {" "}
              Homepage
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="/Homepage">
              {" "}
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="/Homepage">
              Twitter
            </a>
          </p>
        </div>
      </div>
     
    </div>
  );
}

export default Team;
