import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";

const ConsultationAreaTwo = () => {
  return (
    <section className="consultation-area consultation-area-two pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="consultation-content">
              <div className="section-title mb-25">
                <span className="sub-title">95% Accuracy</span>
                <h2 className="title">
                  Worldwide Best Digital Marketing Agency
                </h2>
              </div>

              <p>
              At Innovatix Hub, our consulting services offer expert guidance to help businesses navigate challenges, drive innovation, and achieve sustainable growth. We provide strategic insights, creative solutions, and actionable plans to elevate your business success.
              </p>

              <div className="consultation-list">
                <ul className="list-wrap">
                  <li>
                    <h6 className="title">12X</h6>
                    <p>
                      Faster Order <span>Processing</span>
                    </p>
                  </li>
                  <li>
                    <h6 className="title">99%</h6>
                    <p>
                      Processing <span>Accuracy</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <ConsultationAreaForm />
          </div>
        </div>
      </div>

      <div className="consultation-shape-wrap">
        <img
          src="/img/images/consultation_shape01.png"
          alt=""
          className="shape-one ribbonRotate"
        />
        <img
          src="/img/images/consultation_shape02.png"
          alt=""
          className="shape-two float-bob-x"
        />
      </div>
    </section>
  );
};

export default ConsultationAreaTwo;
