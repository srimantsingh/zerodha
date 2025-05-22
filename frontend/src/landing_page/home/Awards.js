import React from "react";
function Awards() {
  return (
    <div className="container" style={{ marginTop: "14rem" }}>
      <div className="row">
        <div className="col-6">
          <img src="/media/largestBroker.svg" alt="Largest Broker Award"></img>
        </div>
        <div className="col-6  mt-7">
          <h1>Largest stock broker in india</h1>
          <p className="p-2 ">
            2+ millions zerodha clients contribute to over 15% of all retailer
            order<br></br>
            volume in india daily by trading and investing in:
          </p>

          <div className="row p-6">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>commodity derivatives</p>
                </li>
                <li>
                  <p>currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>stocks & ipos</p>
                </li>
                <li>
                  <p>direct mutual funds</p>
                </li>
                <li>
                  <p>bonds & government</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="/media/pressLogos.png"
            alt="Press Logos"
            style={{ width: "100%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
