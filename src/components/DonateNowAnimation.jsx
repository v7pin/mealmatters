import React from 'react';
import Lottie from 'react-lottie';
import donationAnimation from '../assets/animations/donateNow.json';

const DonateNowAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: donationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },  
  };

  return (
    <div className="fixed bottom-0 right-0 mr-6 mb-6">
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
};

export default DonateNowAnimation;
