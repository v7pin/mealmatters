import React, { useState } from 'react';

const DonateNow = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const response = await fetch('http://localhost:3001/api/donate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, amount, message }),
    });
    

    if (response.ok) {
      alert('Donation submitted successfully!');
      
    } else {
      alert('Error submitting donation. Please try again.');
    }
  };

  return (
    <div>
      <h2>Donate Now</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonateNow;
