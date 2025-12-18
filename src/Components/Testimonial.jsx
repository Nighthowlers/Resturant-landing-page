import React from "react";
import ProfilePic from "../assets/avatar.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonials">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          I've been using this service for 3 months and I'm absolutely impressed! The quality of the meals is outstanding, and the convenience of having fresh food delivered to my door has saved me so much time. Highly recommended!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          The food tastes like it's made by a professional chef in a 5-star restaurant. Every dish is perfectly seasoned, beautifully presented, and absolutely delicious. The service is friendly and reliable. This is truly a game-changer!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
