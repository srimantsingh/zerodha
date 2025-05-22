import React from "react";

function Universe() {
    return ( 
       <div className="container my-5">
      <div className="row text-center">
      <h1>The Zerodha Universe</h1>
      <p>Extend your trading and investment experience even further with our partner platforms</p>

       

       
        <div className="col-4 p-5">
          <img style={{width:"310px", height:"90px"}} src="/media/zerodhaFundhouse.png"/>
              <p>Our asset management venture<br></br>
that is creating simple and transparent index<br></br>
funds to help you save for your goals.</p>

        </div>
        
        <div className="col-4 p-5">
          <img style={{width:"200px", height:"50px"}}src="/media/sensibullLogo.svg"/>
          <p>Options trading platform that lets you<br></br>
create strategies, analyze positions, and examine<br></br>
data points like open interest, FII/DII, and more.</p>
        </div>
       
       
        <div className="col-4 p-5">
          <img src="/media/smallcaseLogo.png"/>
          <p>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
        </div>
       
       
        {/* <div className="col-4 p-4">
          <img src="/media/streakLogo.png"/>
        </div> */}
       
       
        <div className="col-4 p-5">
          <img src="/media/smallcaseLogo.png"/>
          <p>Systematic trading platform
that allows you to create and backtest
strategies without coding.  </p>
        </div>
       
       
        <div className="col-4 p-5">
          <img style={{width:"167px", height:"57px"}} src="/media/streakLogo.png"/>
          <p>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>

        </div>
         <div className="col-4 p-5">
          <img style={{width:"167px", height:"57px"}} src="/media/dittoLogo.png"/>
          <p>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free</p>
        </div>
       
       
      
    <button
          className="btn btn-lg d-block mx-auto w-25"
          style={{ backgroundColor: "#387ED1", color: "#fff" }}
        >
          Sign Up for free
        </button>
        
      
        
       

      </div>
    </div>
           
    
     );
}

export default Universe;