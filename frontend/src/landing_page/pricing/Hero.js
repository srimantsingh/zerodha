import React from "react";
function Hero() {
    return ( 
        <div className="container">
           <div className="row text-center mt-5  pb-5   " style={{ color:"#424242"}}>
            <h1 style={{ fontSize:"50px"}}>Charges</h1>
            <p className="mt-3" style=
            {{
                fontSize:"20px",
                
                }}>List of all charges and taxes</p>
           
        <div className="col-4">
            <img src="/media/pricing0.svg"></img>
            <h1 style={{
                fontSize:"28px",
            }}>Free equity delivery</h1>
            <p style={{
                fontSize:"16px",
            }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>


        </div>   
        <div className="col-4">
            <img src="/media/intradayTrades.svg"></img>
            <h1 style={{
                fontSize:"28px",
            }}>Intraday and F&O trades</h1>
            <p  style={{
                fontSize:"16px",
            }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>


        </div>   
        <div className="col-4">
            <img src="/media/pricingEquity.svg"></img>
            <h1 style={{
                fontSize:"28px",
            }}>Free direct MF</h1>
            <p style={{
                fontSize:"16px",
            }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

        </div>   
        </div>
         </div>
     );
}

export default Hero;