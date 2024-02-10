import React from 'react';
import WhatIsFoodWaste from '../components/WhatIsFoodWasteSection';
import HowWeManageFoodSection from '../components/HowWeManageFoodSection';
import ImpactStoriesSection from '../components/ImpactStoriesSection';
import DonationTracker from '../components/DonationTracker';
import HeroSection from '../components/HeroSection';
import NewLetter from '../components/NewLetter';



 const Home = () => {
  return (
    <div id='/main-home'>
    <HeroSection/>
    <WhatIsFoodWaste />
    <HowWeManageFoodSection/>
    <ImpactStoriesSection/>
    <DonationTracker/>
    <NewLetter />
    </div>
  )
}

export default Home;


