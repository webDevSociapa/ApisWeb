'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/logo.png'
import NavBar from './NavBar'

const MHFull = () => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* logo */}
      <div className="w-[120px]">
        <Link href={'/'}>
          <Image
            src={Logo}
            width={100}
            height={55}
            alt="header-logo"
            className="w-[120px] h-[55px] object-contain object-center logoMidScreen"
          />
        </Link>
      </div>

      {/* NavBar - centered */}
      <div className="flex-grow flex justify-center">
        <NavBar className="flex items-center justify-center" />
      </div>

      {/* Search icon */}
      <div className="w-[120px] flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M15.755 14.6118H14.965L14.685 14.3418C15.665 13.2018 16.255 11.7218 16.255 10.1118C16.255 6.52182 13.345 3.61182 9.755 3.61182C6.165 3.61182 3.255 6.52182 3.255 10.1118C3.255 13.7018 6.165 16.6118 9.755 16.6118C11.365 16.6118 12.845 16.0218 13.985 15.0418L14.255 15.3218V16.1118L19.255 21.1018L20.745 19.6118L15.755 14.6118ZM9.755 14.6118C7.26501 14.6118 5.255 12.6018 5.255 10.1118C5.255 7.62182 7.26501 5.61182 9.755 5.61182C12.245 5.61182 14.255 7.62182 14.255 10.1118C14.255 12.6018 12.245 14.6118 9.755 14.6118Z"
            fill="#3D3D3D"
          />
        </svg>
      </div>
    </div>
  )
}

export default MHFull