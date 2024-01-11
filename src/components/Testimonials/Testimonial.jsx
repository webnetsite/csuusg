import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";
import profilePic7 from "../../img/profile7.jpg";
const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review: {
        heading: "Dhan Jharyd B. Felias",
        subheading: "USG PRESIDENT",
        description:
          "Responsible for representing and advocating for student interests, coordinating activities, and fostering a positive environment for the entire student community.",
      },
    },
    {
      img: profilePic2,
      review: {
        heading: "Leizl B. Caserial",
        subheading: "USG VICE PRESIDENT",
        description:
          "Supports the Student Government President in their duties, assists with decision-making, and acts as a liaison between students and the administration.They often take on additional responsibilities as needed.",
      },
    },
    {
      img: profilePic3,
      review: {
        heading: "Christian Kylle A. Balase",
        subheading: "USG AUDITOR",
        description:
          "Responsible for reviewing and assessing the financial records and activities of the student government. They ensure compliance with financial regulations and policies, and provide independent oversight to maintain transparency and integrity.",
      },
    },
    {
      img: profilePic4,
      review: {
        heading: "Jason A. Jamero",
        subheading: "USG TREASURER",
        description:
          "Oversees the finances of the student government, ensuring transparency, managing budgets, and handling financial transactions. They play a crucial role in allocating funds to various student initiatives and ensuring financial accountability.",
      },
    },
    {
      img: profilePic5,
      review: {
        heading: "Sophia Nicole N. Clado",
        subheading: "USG SECRETARY",
        description:
          "Represent specific groups or constituencies within the student body. They voice the concerns and interests of their constituents, participate in decision-making processes, and work collaboratively with other members of the student government to address student needs.",
      },
    },
    {
      img: profilePic6,
      review: {
        heading: "Joshua O. Busa",
        subheading: "USG SENATOR",
        description:
          "Represent specific groups or constituencies within the student body. They voice the concerns and interests of their constituents, participate in decision-making processes, and work collaboratively with other members of the student government to address student needs.",
      },
    },
    {
      img: profilePic7,
      review: {
        heading: "James R. Rosales",
        subheading: "USG SENATOR",
        description:
          "Represent specific groups or constituencies within the student body. They voice the concerns and interests of their constituents, participate in decision-making processes, and work collaboratively with other members of the student government to address student needs.",
      },
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>CSU-USG </span>
        <span> &nbsp;OFFICERS </span>
        <span> &nbsp;2023</span>
        <div className="blur t-blur1" style={{ background: "#ffdfaa" }}></div>
        <div className="blur t-blur2" style={{ background: "#ffdfaa" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <h2>{client.review.heading}</h2>
                <h3>{client.review.subheading}</h3>
                <p>{client.review.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;