// App.js or Form.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  // Add phone field
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (formData.name && formData.email && formData.message) {
      try {
        // Make a POST request to the Google Apps Script endpoint
        const response = await fetch('https://script.google.com/macros/s/AKfycbxRtSIxmLXVsybEdUHJnwrkH75S11nSYATMStLLrlAVVRfIMeOJvbiJjlaPiMos1-Cslw/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData).toString(),
        });

        console.log(await response.text());


      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="form">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:  {/* Added phone field */}
          <input
            type="text"
            name="phone"
            placeholder='Enter your phone number'
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            placeholder='Type your message...'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
