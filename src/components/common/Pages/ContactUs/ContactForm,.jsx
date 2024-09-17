import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cityLocation: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  });
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-mail', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.data.success) {
        setPopupMessage('Query successfully sent!');
        setFormData({
          fullName: '',
          cityLocation: '',
          emailAddress: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        setPopupMessage('Failed to send query. Please try again.');
      }
    } catch (error) {
      setPopupMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full bg-color py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-black mb-4">Share Your Views For Apis</h2>
        <p className="text-center text-xl text-black mb-8">Enter the following details and share your views</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black text-base font-normal">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-black text-base font-normal">City Location</label>
              <input
                type="text"
                name="cityLocation"
                value={formData.cityLocation}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black text-base font-normal">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-black text-base font-normal">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-black text-base font-normal">Message for Apis</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded h-32"
              placeholder="Write complete message here"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded">Submit</button>
          </div>
        </form>
        {popupMessage && (
          <div className="fixed top-0 right-0 m-4 p-4 bg-green-100 text-green-700 rounded shadow">
            {popupMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
