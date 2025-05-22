import React from "react";
function Hero() {
  return (
    <div className="container">
      <h1>
        <span
          className="text-center d-block "
          style={{
            color: "#424242",
            marginTop: "8rem",
          }}
        >
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </span>
      </h1>

      <div
        className="row justify-content-center"
        style={{
          marginTop: "9rem",
          fontSize: "18px",
          color: "#424242",
          lineHeight: "1.8",
        }}
      >
        <div className="col-5">
          <p>
            We kick-started operations on the 15th of August, 2010
            <br />
            with the goal of breaking all barriers that traders and
            <br />
            investors face in India in terms of cost, support, and
            <br />
            technology. We named the company Zerodha, a<br />
            combination of Zero and "Rodha", the Sanskrit word for
            <br />
            barrier.
            <br />
            Today, our disruptive pricing models and in-house
            <br />
            technology have made us the biggest stock broker
            <br />
            in India.
            <br />
            Over 1.6+ crore clients place billions of orders every year
            <br />
            through our powerful ecosystem of investment
            <br />
            platforms, contributing over 15% of all Indian retail
            <br />
            trading volumes.
          </p>
        </div>

        <div className="col-5">
          <p>
            In addition, we run a number of popular open online
            <br />
            educational and community initiatives to empower retail
            <br />
            traders and investors.
            <br />
            <a className="text-decoration-none" href="/Rainmatter">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested
            <br />
            in several fintech startups with the{" "}
            <a className="text-decoration-none" href="/goal">
              goal
            </a>{" "}
            of growing the
            <br />
            Indian capital markets.
            <br />
            And yet, we are always up to something new every day.
            <br />
            Catch up on the latest updates on our blog or see what
            <br />
            the media is{" "}
            <a className="text-decoration-none" href="/saying about us">
              saying about us
            </a>{" "}
            or learn more about our
            <br />
            business and product{" "}
            <a className="text-decoration-none" href="/philosophies">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
