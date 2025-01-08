import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-45">
              <span className="sub-title">Our Company</span>
              <h2 className="title">InnovatixHub History</h2>
              <p>
              Pioneering Innovation and Excellence, Shaping the Future of Business
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
            <img src="/img/images/history_img.jpg" alt="" />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                  The Intention was to Establish The Company
                </h2>
                <p>
                The intention behind establishing the company was to create a platform that fosters innovation, drives business growth, and provides cutting-edge solutions. With a clear vision to make a meaningful impact, the founders sought to bridge the gap between creative ideas and strategic execution. By combining industry expertise, advanced technologies, and a passion for excellence, the company aimed to offer services that cater to the evolving needs of clients. Every step was taken to ensure that the foundation of the company was rooted in values of integrity, customer-centricity, and a commitment to shaping a better future for businesses across the globe.
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="far fa-check"></i>Everyone can design at low
                    cost
                  </li>
                  <li>
                    <i className="far fa-check"></i>Designing in a different way
                  </li>
                  <li>
                    <i className="far fa-check"></i>Our designs sill be world
                    wide best designs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* road map */}
        <HistoryAreaRoadmap />
      </div>

      <div className="history-shape-wrap">
        <img src="/img/images/history_shape01.png" alt="" />
        <img src="/img/images/history_shape02.png" alt="" />
      </div>
    </section>
  );
};

export default HistoryArea;
