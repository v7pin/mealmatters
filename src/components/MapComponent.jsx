import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const MapComponent = ({ handleSendLocation }) => {
  const [location, setLocation] = useState(null);

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        handleSendLocation(position.coords); 
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  };

  return (
    <div className="mb-5">
      <button onClick={fetchLocation} className="text-white font-montserrat text-2xl">
        <span>
          <FaLocationDot size={45} />
        </span>{' '}
        Send your Current Location
      </button>
      <div id="map" className="mt-3">
        {location && (
          <iframe
            title="Map"
            width="100%"
            height="300"
            src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 'none', height: '60vh' }}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
