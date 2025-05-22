import React from "react";

function CreateTicket() {
  const linkStyle = { textDecoration: "none", color: "blue" };

  return (
    <div className="container">
      <div className="row p-5">
        <h3
          style={{
            padding: "5px",
            color: "#666666",
            fontSize: "20px",
          }}
        >
          To create a ticket, select a relevant topic
        </h3>

        {/* Account Opening */}
        <div className="col-4 p-5">
          <h5>
            <i className="bi bi-plus-circle me-2"></i>Account Opening
          </h5>
          <ul className="p-4" style={{ color: "black", fontSize: "17px" }}>
            <li><a href="#" style={linkStyle}>Resident individual</a></li>
            <li><a href="#" style={linkStyle}>Minor</a></li>
            <li><a href="#" style={linkStyle}>Non Resident Indian (NRI)</a></li>
            <li><a href="#" style={linkStyle}>Company, Partnership, HUF and LLP</a></li>
            <li><a href="#" style={linkStyle}>Glossary</a></li>
          </ul>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-4 p-5">
          <h5>
            <i className="bi bi-person me-2"></i>Your Zerodha Account
          </h5>
          <ul className="p-4" style={{ color: "black", fontSize: "17px" }}>
            <li><a href="#" style={linkStyle}>Your Profile</a></li>
            <li><a href="#" style={linkStyle}>Account modification</a></li>
            <li><a href="#" style={linkStyle}>Client Master Report (CMR) and DP</a></li>
            <li><a href="#" style={linkStyle}>Nomination</a></li>
            <li><a href="#" style={linkStyle}>Transfer and conversion</a></li>
          </ul>
        </div>

        {/* Kite */}
        <div className="col-4 p-5">
          <h5>
            <i className="bi bi-bar-chart-line me-2"></i>Kite
          </h5>
          <ul className="p-4" style={{ color: "black", fontSize: "17px" }}>
            <li><a href="#" style={linkStyle}>IPO</a></li>
            <li><a href="#" style={linkStyle}>Trading FAQs</a></li>
            <li><a href="#" style={linkStyle}>MTF and Margins</a></li>
            <li><a href="#" style={linkStyle}>Charts and orders</a></li>
            <li><a href="#" style={linkStyle}>Alerts and Nudges</a></li>
            <li><a href="#" style={linkStyle}>General</a></li>
          </ul>
        </div>

        {/* Funds */}
        <div className="col-4 p-5">
          <h5>
            <i className="bi bi-wallet2 me-2"></i>Funds
          </h5>
          <ul className="p-4" style={{ color: "black", fontSize: "17px" }}>
            <li><a href="#" style={linkStyle}>Add money</a></li>
            <li><a href="#" style={linkStyle}>Withdraw money</a></li>
            <li><a href="#" style={linkStyle}>Add bank accounts</a></li>
            <li><a href="#" style={linkStyle}>eMandates</a></li>
          </ul>
        </div>

        {/* Console */}
        <div className="col-4 p-5">
          <h5>
            <i className="bi bi-grid-3x3-gap-fill me-2"></i>Console
          </h5>
          <ul className="p-4" style={{ color: "black", fontSize: "17px" }}>
            <li><a href="#" style={linkStyle}>Portfolio</a></li>
            <li><a href="#" style={linkStyle}>Corporate actions</a></li>
            <li><a href="#" style={linkStyle}>Funds statement</a></li>
            <li><a href="#" style={linkStyle}>Reports</a></li>
            <li><a href="#" style={linkStyle}>Profile</a></li>
            <li><a href="#" style={linkStyle}>Segments</a></li>
          </ul>
        </div>

        {/* Coin */}
        <div className="col-4 p-5">
          <h5>
            <i className="bi bi-clock-history me-2"></i>Coin
          </h5>
          <ul className="p-4" style={{ color: "black", fontSize: "17px" }}>
            <li><a href="#" style={linkStyle}>Understanding mutual funds and Coin</a></li>
            <li><a href="#" style={linkStyle}>Coin app</a></li>
            <li><a href="#" style={linkStyle}>Coin web</a></li>
            <li><a href="#" style={linkStyle}>Transactions and reports</a></li>
            <li><a href="#" style={linkStyle}>NPS</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
