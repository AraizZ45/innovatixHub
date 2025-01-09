import React from "react";

const InnerContactInfo = () => {
  const info_items = [
    {
      src: "/img/icon/loction_icon03.png",
      title: "Address",
      desc: (
        <>
          <p>11 SKYBLUE CCT
          YARRABILBA, QLD, 4207</p>
        </>
      ),
    },
    {
      src: "/img/icon/mail_icon03.png",
      title: "Email",
      desc: (
        <>
          <a href="mailto:info@innovatixhub.com.au">info@innovatixhub.com.au</a>
        </>
      ),
    },
    {
      src: "/img/icon/phone_icon03.png",
      title: "Call Us",
      desc: (
        <>
          <a href="tel:+61480008440">+61480008440</a>
        </>
      ),
    },
  ];

  return (
    <ul className="list-wrap">
      {info_items.map((x, index) => (
        <li key={index}>
          <div className="contact-info-item">
            <div className="icon">
              <img src={x.src} alt="" />
            </div>
            <div className="content">
              <h6 className="title">{x.title}</h6>
              {x.desc}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InnerContactInfo;
