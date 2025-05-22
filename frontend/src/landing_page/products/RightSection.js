import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} className="text-decoration-none">
              Learn More <i className="bi bi-arrow-right"></i>
            </a>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
