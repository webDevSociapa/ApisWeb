'use client'

import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import Banner from '@/assets/images/ContactUs/Contact-Banner.png'
import Tabs from './Tabs'
import ImageBanner from '../../Layout/Banner'
export default function ContactUs() {
  return (
    <>
      <ImageBanner banner={Banner} />
      <div className="bg-white w-full text-center py-8 shadow">
        <div className="flex justify-center mt-6 ">
          <Tabs />
        </div>
      </div>
      <ContactForm />
    </>
  )
}

ContactUs.propTypes = {
  initialData: PropTypes.object,
}
