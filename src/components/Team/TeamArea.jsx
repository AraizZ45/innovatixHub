import React from "react";
import { Link } from "react-router-dom";

const TeamArea = () => {
  return (
    <section className="team-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="team-img-wrap">
              <img
                src="/img/team/team_img_shape.png"
                alt=""
                className="img-shape"
              />
              <img src="/img/team/team_img01.png" alt="" className="img-one" />
              <img src="/img/team/team_img02.png" alt="" className="img-two" />
              <img
                src="/img/team/team_img03.png"
                alt=""
                className="img-three"
              />
              <img src="/img/team/team_img04.png" alt="" className="img-four" />
              <img src="/img/team/team_img05.png" alt="" className="img-five" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-content">
              <div className="section-title mb-25">
                <span className="sub-title">Our Team</span>
                <h2 className="title">
                We turn ideas into reality through collaboration.
                </h2>
              </div>
              <p>
              Our team at Innovatix Hub combines passion, creativity, and expertise to drive innovation, foster collaboration, and transform ideas into reality.
              </p>
              <Link to="/team" className="btn">
                Meet Our Team <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="team-shape-wrap">
        <img
          src="/img/images/team_shape01.png"
          alt=""
          className="ribbonRotate"
        />
        <img
          src="/img/images/team_shape02.png"
          alt=""
          className="float-bob-x"
        />
      </div>
    </section>
  );
};

export default TeamArea;
