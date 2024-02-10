import React from "react";
import Lottie from "react-lottie";
import foodDonatedAnimation from "../assets/animations/deliverywithscooty.json";
import foodSecuredAnimation from "../assets/animations/Delivery.json";
import foodPickedAnimation from "../assets/animations/animation2.json";

const cardData = [
  {
    animationData: foodPickedAnimation,
    title: "Food is Picked",
    description:
      "Our dedicated team ensures that the secured food reaches its destination. We pick up the food and deliver it to various locations, making a positive impact on the lives of those facing hunger.",
  },

  {
    animationData: foodSecuredAnimation,
    title: "Food is Secured",
    description:
      "Ensuring the safety and quality of the donated food is our top priority. We employ strict measures to secure and store the food properly, adhering to the highest hygiene standards.",
  },
  {
    animationData: foodDonatedAnimation,
    title: "Food is Donated",
    description:
      "We gratefully receive food donations from generous contributors who believe in making a difference. Your contributions help us provide meals to those in need.",
  },
];

const CardWithLottie = ({ animationData, title, description }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="max-w-sm mx-4 mb-8 overflow-hidden bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 top-2">
      <Lottie options={defaultOptions} height={240} width={240} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-500">
          {title}
        </h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div
        className="text-6xl font-extrabold text-center font-poppins mt-9 text-blue-900"
        id="what-we-do"
      >
        <h2 className="bg-blue-900 text-white p-6">
          How can we manage food waste?
        </h2>
      </div>
      <div class="bg-gray-100 mt-3">
        <div className="container mx-auto mt-4 flex flex-wrap justify-center p-8 ">
          {cardData.map((card, index) => (
            <CardWithLottie key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
