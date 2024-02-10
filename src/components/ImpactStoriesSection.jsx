import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImpactStoriesSection = () => {
  const impactStories = [
    {
      image: "./imp1.jpg",
      title: "Empowering Communities",
      content:
        "Transformative impact stories share the success and growth achieved through community initiatives. These narratives inspire, raise awareness, and foster ongoing support for sustainable development, amplifying the voices of empowered individuals.",
    },
    {
      image: "imp2.jpeg",
      title: "Transforming Lives Through Nutrition",
      content:
        "A journey of nourishing communities, fostering well-being, and creating lasting impact by promoting healthier, more resilient lives through nutrition-focused initiatives.",
    },
    {
      image: "imp3.jpg",
      title: "Building Sustainable Futures",
      content:
        "Empowering communities, fostering resilience, and creating lasting impact through sustainable practices and initiatives for a brighter future.",
    },
    {
      image: "imp4.jpeg",
      title:
        "From Hunger to Hope: Nourishing Lives Through Food Redistribution",
      content:
        "Explore heartwarming stories of how surplus food is redirected from waste to plates, addressing hunger and promoting a sustainable approach to nutrition.",
    },
    {
      image: "imp5.jpg",
      title: "Tech for Good: Innovations in Food Waste Reduction",
      content:
        "Delve into the technological innovations that are reshaping the fight against food waste, making our processes more efficient, scalable, and impactful.",
    },
    {
      image: "imp6.jpeg",
      title: "Voices from the Field: Stories of Resilience Amidst Adversity",
      content:
        "Listen to the firsthand accounts of individuals overcoming challenges, demonstrating resilience, and finding hope through the support of our community-driven initiatives.",
    },
    {
      image: "imp7.jpeg",
      title:
        "Youth Ambassadors: Inspiring the Next Generation of Change-Makers",
      content:
        "Empowering communities, fostering resilience, and creating lasting impact through sustainable practices and initiatives for a brighter future.",
    },
    {
      image: "imp8.jpeg",
      title: "Healing the Earth: Sustainable Practices for a Greener Tomorrow",
      content:
        "Embark on a journey of sustainable practices that contribute to environmental well-being, promoting a harmonious relationship between humanity and the planet.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-full mb-10 mt-5">
      <section className="text-center">
        <h1 className="text-6xl mt-1 font-great font-bold text-black">
          Inspiring Impact Stories
        </h1>
        <p className="text-lg mt-3 text-gray-600">
          Discover the stories that make a difference and inspire change.
        </p>
      </section>
      <div className="flex items-center justify-center mt-3">
        <Slider {...sliderSettings} className="max-w-3xl w-full">
          {impactStories.map((story, index) => (
            <div
              key={index}
              className="max-w-3xl mx-auto mb-8 p-6 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={story.image}
                alt={`Impact Story ${index + 1}`}
                className="w-full h-86 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{story.title}</h2>
                <p className="text-gray-700">{story.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImpactStoriesSection;
