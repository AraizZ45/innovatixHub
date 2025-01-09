import React from "react";
import InnerContactForm from "./InnerContactForm";
import InnerContactInfo from "./InnerContactInfo";

const InnerContactArea = () => {
  return (
    <section className="inner-contact-area mb-90">
      <div className="container">
        <div className="inner-contact-wrap">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <div className="section-title title-style-two mb-50">
                <h2 className="title">
                  Have a <span className="text-pink">Cool Project?</span> Get in touch!
                </h2>
              </div>

              <div className="inner-contact-form-wrap">
                <InnerContactForm />
              </div>

              <div id="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.4006458930953!2d153.10358427628586!3d-27.79743607613105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b913932f8cada69%3A0x4e4ae8b83ae6e12a!2s11%20Skyblue%20Cct%2C%20Yarrabilba%20QLD%204207%2C%20Australia!5e0!3m2!1sen!2s!4v1736388281583!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="inner-contact-info">
                <InnerContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerContactArea;
