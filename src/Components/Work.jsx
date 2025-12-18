import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Browse through our diverse selection of gourmet meals, curated by professional chefs. Choose from vegetarian, vegan, gluten-free, and classic options to match your dietary preferences and taste.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Select your preferred delivery frequency - weekly, bi-weekly, or monthly. Customize your meal plan based on your schedule and appetite. Skip or pause deliveries anytime with no commitment.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy quick and reliable delivery straight to your door. Our meals arrive fresh and hot, packaged with care to maintain optimal temperature and quality throughout the journey to your home.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our streamlined process makes it easy to enjoy delicious meals. Simply browse our menu, select your favorite meals, choose your delivery frequency, and let us handle the rest. Fresh food delivered to your doorstep in no time.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
