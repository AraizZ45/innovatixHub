import React from "react";

const ServicesDetailsArea = ({para}) => {
  return (
    <div className="services-details-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="services-details-img text-center">
              <img src="/img/images/services_details_img.png" alt="" />
            </div>

            <div className="services-details-content text-center">
              <p>
                {para}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-shape">
        <img src="/img/images/services_details_shape.png" alt="" />
      </div>
    </div>
  );
};

export default ServicesDetailsArea;
