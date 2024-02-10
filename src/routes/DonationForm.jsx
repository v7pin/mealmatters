import React, { useState } from "react";
import axios from "axios";
import MapComponent from "../components/MapComponent";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    quantity: 0,
    termsAndConditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      const response = await axios.post(
        "/get-involved/api/submit-donation",
        formData
      );

      console.log("Form data submitted:", formData);
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleShowCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error getting current position:", error.message);
        }
      );
    }
  };

  return (
    <div className="bg-[#101010] bg-no-repeat bg-cover">
      <section className="donation-form h-full min-h-screen px-[30%] py-[110px]">
        <div className="donation-form-container text-teal-600 ">
          <h1 className="text-[32px]">
            Make a <span className="text-[rgb(32,101,101)]">Donation</span>
          </h1>
          <form onSubmit={handleSubmit} method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date of Preparation</label>
              <input
                type="datetime-local"
                name="date"
                id="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity (in Kg)</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                required
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="termsAndConditions"
                  checked={formData.termsAndConditions}
                  onChange={handleChange}
                  required
                />
                I accept the Terms & Conditions
              </label>
            </div>
            <div className="form-group">
              <MapComponent handleSendLocation={handleShowCurrentPosition} />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DonationForm;
