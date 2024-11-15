'use client'
import React,{useState,useEffect } from 'react';
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
  const [messageInfo, setMessageInfo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sendMail', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("response",response,response.data.success);
      
      
      if (response.data.status) {
        setPopupMessage("Thank you! We've received your query. Our team will be in touch with you shortly!");
        setMessageInfo(true);
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
  
  
  useEffect(() => {
    if (messageInfo) {
      const timer = setTimeout(() => {
        setPopupMessage('');
        setMessageInfo(false); // Reset the messageInfo state
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer); // Clean up timer on component unmount or messageInfo change
    }
  }, [messageInfo]); // Dependency on messageInfo

  const closeToast = () => {
    setPopupMessage('');
    setMessageInfo(false);
  }
  
  return (
    <div className="w-full bg-[#EECB9A] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-black mb-2">Share Your Views For Apis</h2>
        <p className="text-center text-lg text-black mb-8">Enter the following details and share your views</p>
        
        {popupMessage && (
            <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow mt-5" role="alert">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg bg-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#835415" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              </div>
              <div className="ms-3 text-sm font-normal">{popupMessage}</div>
              <button type="button" onClick={closeToast} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
          )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black text-sm font-normal mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border-[1px] border-[#000000] rounded bg-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-black text-sm font-normal mb-1">City Location</label>
              <input
                type="text"
                name="cityLocation"
                value={formData.cityLocation}
                onChange={handleChange}
                className="w-full p-2 border-[1px] border-[#000000] rounded bg-transparent"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black text-sm font-normal mb-1">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full p-2 border-[1px] border-[#000000] rounded bg-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-black text-sm font-normal mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border-[1px] border-[#000000] rounded bg-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-black text-sm font-normal mb-1">Message for Apis</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-[1px] border-[#000000] rounded bg-transparent h-32 placeholder-black placeholder-opacity-60"
              placeholder="Write complete message here"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#AE844A] text-white py-2 px-8 rounded font-literata text-base	font-medium	color:[#fffff] font-semibold hover:bg-[#AE844A]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
