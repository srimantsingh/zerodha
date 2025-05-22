import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Right Text */}
        <div className="col-md-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Links */}
          <div className="d-flex flex-wrap gap-4 mt-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i className="bi bi-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          {/* App Buttons */}
          <div className="d-flex gap-3 mt-4">
            <a href={googlePlay}>
              <img
                src="/media/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/appstoreBadge.svg"
                alt="Download on the App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
