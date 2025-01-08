import React from "react";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="container custom-container">
        <div className="about-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-46 order-0 order-lg-2">
              <div className="about-img text-end">
                <img src="/img/images/about_img.jpg" alt="" />
              </div>
            </div>
            <div className="col-54">
              <div className="about-content">
                <div className="section-title mb-25">
                  <span className="sub-title">About Company</span>
                  <h2 className="title">
                    Top Design Agency at Your Service
                  </h2>
                </div>
                <p>
                  At Innovatix Hub, we believe that strong
                  communication is the cornerstone of successful
                  collaborations.
                </p>
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Creativity Without Boundaries</h4>
                      <p>
                      We inspire fresh ideas and bold approaches to tackle the challenges of tomorrow.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon02.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Collaboration at the Core</h4>
                      <p>
                      We connect like-minded individuals, fostering partnerships that ignite innovation.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="about-content-bottom">
                  <span>Think Innovatix Hub Are a Full Service Design</span>
                  <div className="read-more-btn">
                    <Link to="/about-us" className="btn">
                      Read More <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
