import React, { useState } from "react";
import axios from "axios";
import MapComponent from "../components/MapComponent";

const Registration = () => {
  const [formData, setFormData] = useState({
    my_name1: "",
    my_email: "",
    my_phone_num: "",
    my_address: "",
    my_food_type: "",
    quantity: 0,
    food_date: "",
    note: "",
    tnc: false,
    latitude: null,
    longitude: null,
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
        "/get-involved/api/submit-registration",
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

          // Update formData with latitude and longitude
          setFormData((prevData) => ({
            ...prevData,
            latitude,
            longitude,
          }));
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    }
  };
  return (
    <div className="bg-[#101010] bg-no-repeat bg-cover">
      <section className="registration h-full min-h-screen px-[30%] py-[110px]">
        <div className="register-form text-teal-600 ">
          <h1 className="text-[32px]">
            Donate <span className="text-[rgb(32,101,101)]">Food</span>
          </h1>
          <p>
            It's not how much we give, but how much love we put into giving!
          </p>{" "}
          <br />
          <form
            action="https://getform.io/f/172d1c35-9010-40aa-80e1-e79360668215"
            method="post"
          >
            <input
              type="text"
              name="myname1"
              placeholder="Your Name"
              id="name"
              required
              className="text-[white] bg-[#191919] text-xl mb-5 p-[17px] rounded-[10px] border-[none];
              outline: none"
            />
            <input
              type="email"
              name="myemail"
              placeholder="Your Email"
              id=""
              required
            />
            <input
              type="tel"
              name="myphone"
              placeholder="Your Phone No."
              id="phonenum"
              required
            />
            <input
              type="text"
              name="myadd"
              placeholder="Collection Address"
              id=""
              required
            />
            <h4 className="text-[22px] font-medium text-[#fc0050] mt-5">
              Category
            </h4>
            <input type="radio" name="myfood" id="" required /> Veg &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="myfood" id="" /> Non-Veg &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="myfood" id="" /> Both
            <h4>Quanity (in Kg)</h4>
            <input type="number" name="quantity" id="" />
            <h4>Food Preparation Date and Time</h4>
            <input type="datetime-local" name="fooddate" id="" required />{" "}
            <br /> <br />
            <MapComponent handleSendLocation={handleShowCurrentPosition} />
            <input
              type="hidden"
              name="latitude"
              value={formData.latitude || ""}
            />
            <input
              type="hidden"
              name="longitude"
              value={formData.longitude || ""}
            />
            <textarea
              name="note"
              id=""
              cols="2"
              rows="3"
              placeholder="Special Note"
            ></textarea>
            <br />
            <br />
            <input
              type="checkbox"
              name="tnc"
              id=""
              checked={formData.tnc}
              onChange={handleChange}
              required
            />{" "}
            I accept the Terms & Conditions. <br />
            <input
              type="submit"
              value="Submit"
              className="submitbtn"
              required
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
