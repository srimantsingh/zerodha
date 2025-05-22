import React from "react";
function Stats() {
  return (
    <div className="container p-5" style={{ color: "#424242" }}>
      <div className="row ">
        <div className="col-6 p-5">
          <h1 className="mt-6 p-5"> Trust with confidence</h1>
          <h4>Customer-first always</h4>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br></br>{" "}
            lakh crores of equity investments and contribute to 15%<br></br> of
            daily retail exchange volumes in India.
          </p>

          <h4>No spam or gimmicks</h4>
          <p>
            No gimmicks, spam, "gamification", or annoying push<br></br>{" "}
            notifications. High quality apps that you use at your <br></br>pace,
            the way you like. Our philosophies.
          </p>

          <h4>The Zerodha universe</h4>
          <p>
            Not just an app, but a whole ecosystem. Our investments <br></br>{" "}
            30+ fintech startups offer you tailored services<br></br> specific
            to your needs.
          </p>
         
          <h4>Do better with money</h4>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just <br></br>facilitate transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="/media/ecosystem.png" style={{ width: "100%" }}></img>
          
            <div>
            
        
       <a href="/products" className="text-decoration-none text-primary fw-bold">
  Explore our products <i className="fas fa-arrow-right ms-2"></i>
</a>
<a href="/products" className="text-decoration-none text-primary fw-bold">
  Try Kite demo  <i className="fas fa-arrow-right ms-2"></i>
</a>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
