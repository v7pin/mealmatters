import React from "react";
import Lottie from "react-lottie";
import animationData1 from "../assets/animations/whatIsFoodWaste.json";
import shockingReactionPhoto from "../assets/animations/shock.avif";

const WhatIsFoodWaste = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const photoSources = [
    { url: "./fw1.jpg", source: "Photographer 1" },
    { url: "./fw2.jpg", source: "Photographer 2" },
    { url: "./fw3.jpg", source: "Photographer 3" },
    { url: "./fw4.jpg", source: "Photographer 4" },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-blue-50 via-white to-white" id="home">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/4 mr-4 bg-transparent">
          <Lottie options={defaultOptions} height={150} width={250} />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/4 h-full ">
          <h2 className="text-7xl font-semibold text-center font-poppins mt-4 relative fit" >
            <span
              className="text-white"
              style={{ WebkitTextStroke: "3px black" }}
            >
              What is Food{" "}
              <span
                className="text-red-500"
                style={{ WebkitTextStroke: "3px black" }}
              >
                Waste
              </span>
            </span>
          </h2>
          <p className="text-black mt-6 text-2xl" style={{ fontSize: "20px" }} >
            Food waste is any type of food that is discarded or not eaten. It
            can include uneaten food from meals, spoiled food, trimmings from
            food preparation, and food products that have been damaged and
            deemed unfit for human consumption.
          </p>
          <h2 className="text-left mt-4" style={{ fontSize: "4vh" }}>
            Types of food waste:
          </h2>
          <div className="flex flex-wrap mt-4">
            <div className="bg-blue-800 text-white p-4 m-2 transform -skew-x-12">
              1) Fruit and Vegetable waste
            </div>
            <div className="bg-blue-800 text-white p-4 m-2 transform -skew-x-12">
              2) Beverage waste
            </div>
            <div className="bg-blue-800 text-white p-4 m-2 transform -skew-x-12">
              3) Fish, Meat & Poultry waste
            </div>
            <div className="bg-blue-800 text-white p-4 m-2 transform -skew-x-12">
              4) Sugar Industry waste
            </div>
            <div className="bg-blue-800 text-white p-4 m-2 transform -skew-x-12">
              5) Dairy waste
            </div>
            <div className="bg-blue-800 text-white p-4 m-2 transform -skew-x-12">
              6) Mineral waste
            </div>
            <div className="bg-blue-800 text-white p-4 m-2 transform -skew-x-12">
              7) Oil residue waste
            </div>
          </div>

          <p className="text-left mt-4">
            These are a few images from the hostel mess of YCCE.
          </p>

          <div className="flex flex-wrap mt-4">
            {photoSources.map((photo, index) => (
              <div key={index} className="relative m-2">
                <img
                  src={photo.url}
                  alt={`Photo ${index + 1}`}
                  className="w-40 h-40   object-cover rounded-md hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 bg-black text-blue-900 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.source}
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <img src={shockingReactionPhoto} alt="Shocking Reaction" className="mt-4 w-1/4 h-auto" />
      </div>
    </section>
  );
};

export default WhatIsFoodWaste;
