import React, { useState, useEffect } from "react";

const DonationTracker = () => {
  const [mealsDonated, setMealsDonated] = useState(0);
  const [mealsDistributed, setMealsDistributed] = useState(0);
  const [impactMade, setImpactMade] = useState(0);


  useEffect(() => {
    const updateData = () => {
      
      const newMealsDonated = Math.floor(Math.random() * 100);
      const newMealsDistributed = Math.floor(Math.random() * 100);
      const newImpactMade = Math.floor(Math.random() * 100);

      setMealsDonated(newMealsDonated);
      setMealsDistributed(newMealsDistributed);
      setImpactMade(newImpactMade);
    };


    const interval = setInterval(updateData, 30000);

  
    updateData();

  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-500 p-6 rounded-lg shadow-md text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Donation Tracker</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Meals Donated</h3>
          <p className="text-3xl font-bold">{mealsDonated}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Meals Distributed</h3>
          <p className="text-3xl font-bold">{mealsDistributed}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Impact Made</h3>
          <p className="text-3xl font-bold">{impactMade}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationTracker;
