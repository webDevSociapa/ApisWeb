'use client'

import { useState } from 'react'; // Ensure you import useState
import axios from 'axios'; // Ensure you import axios
import Image from 'next/image'
import HoneyMug from '@/assets/images/heart-of-bavaria-section/honey-mug.png'
import HoneyNest from '@/assets/images/heart-of-bavaria-section/honey-nest.png'

const Newsletter = () => {
  const [formData, setFormData] = useState(''); // Initialize formData as an empty string
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value); // Update formData with the input value
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-subscribe', { email: formData }, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.data.success) {
        setPopupMessage('Thank you! Successfully subscribed to our email.');
        setFormData('');
      } else {
        setPopupMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setPopupMessage('An error occurred. Please try again.');
    }
  }

  return (
    <div className="w-full py-10">
      <div className="relative h-[300px] md:h-[448px] bg-[#9F7B49] px-6 py-4">
        <Image
          src={HoneyMug}
          width={330}
          height={376}
          alt="Honey Mug"
          className="absolute hidden sm:inline left-2 lg:left-0 bottom-4 lg:bottom-0 h-[200px] w-[200px] lg:h-[376px] lg:w-[330px] object-contain object-center"
        />
        <Image
          src={HoneyNest}
          width={330}
          height={400}
          alt="Honey Nest"
          className="absolute hidden sm:inline right-0 bottom-3 lg:-bottom-6 h-[200px] w-[200px] lg:h-[400px] lg:w-[330px] object-contain object-center"
        />
        <div className="absolute left-0 top-[65px] h-[164px] md:h-[318px] w-[23px] bg-white"></div>
        <div className="absolute right-0 top-[65px] h-[164px] md:h-[318px] w-[23px] bg-white"></div>

        <div className="flex h-full flex-col items-center justify-center bg-white">
          <p className="text-[12px] font-jost text-center md:text-[22px] font-medium uppercase text-[#585858]">
            Stay in the loop!
          </p>
          <p className="text-[20px] text-center md:text-[40px] font-bold text-[#9F7B49]">
            Subscribe To Our Newsletter
          </p>
          <p className="text-center font-jost text-[12px] md:text-[20px] font-medium text-[#666666]">
            Subscribe to our newsletter for the latest updates, exclusive offers, and insider insights delivered
          </p>
          <p className="text-center text-[12px] font-jost md:text-[20px] font-medium text-[#666666]">
            straight to your inbox.
          </p>
          <form onSubmit={handleSubmit}> {/* Corrected the form tag */}
            <div className="flex items-center pt-4 md:pt-10">
              <input
                type="email" // Changed type to "email" for better validation
                placeholder="Enter Your Email Address"
                className="h-[30px] font-jost md:h-[50px] w-[170px] md:w-[350px] border border-[#9F7B49] px-2 py-1 md:px-4 md:py-2 text-xs md:text-base placeholder-[#666666] outline-none"
                value={formData}
                onChange={handleChange}
                required
              />
              <button type="submit" className="bg-[#9F7B49] px-2 py-[7px] md:px-3 md:py-[11px] md:text-xl text-xs font-bold text-white">
                Subscribe {/* Fixed the typo */}
              </button>
            </div>
          </form>
          {popupMessage && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded shadow">
              {popupMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Newsletter
