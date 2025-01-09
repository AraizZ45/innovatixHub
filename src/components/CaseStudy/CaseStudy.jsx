import React from "react";
import CaseStudyItem from "./CaseStudyItem";
import { Link } from "react-router-dom";

const CaseStudy = ({studies}) => {
  return (
    <section className="inner-project-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-65">
              <h2 className="title">Our Projects</h2>
            </div>
          </div>
        </div>

        <div className="inner-project-item-wrap">
          <div className="row justify-content-center">
            {studies.map((x, index) => (
              <CaseStudyItem key={index} item={x} />
            ))}
          </div>

          <div className="more-btn text-center mt-45">
            <Link to="/portfolio" className="btn">
              Load More <span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
