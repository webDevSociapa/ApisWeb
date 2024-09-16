'use client'

import Image from 'next/image'

import FbImg from '@/assets/images/social/fb.png'
import InstaImg from '@/assets/images/social/insta.png'
import LinkImg from '@/assets/images/social/link-din.png'
import UtubeImg from '@/assets/images/social/utube.png'
import Xcom from '@/assets/images/social/xcom.png'

const BrewerLoginHeader = () => {
  return (
    <header className="sticky top-0 z-[100] flex w-full">
      <div className="flex w-full items-center justify-between gap-2 border-2 bg-[#FFFBF6] px-2 sm:px-8 py-4 text-xl font-bold leading-[30px] text-[#835415] underline">
        <marquee>
          <p className="HeaderMarquee text-sm sm:text-xl">
            We Here At Apis Keep quality on top preference as we believe your
            trust is our presence.
          </p>
        </marquee>
        <div className="flex items-center hidden lg:inline-flex justify-center gap-5">
          <a href={'https://www.facebook.com/apisindialtd'} target="_blank">
            <Image
              src={FbImg}
              alt="FbImg"
              height={21}
              width={20}
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center"
            />
          </a>
          <a href={'https://x.com/apis_india'} target="_blank">
            <Image
              src={Xcom}
              height={21}
              width={20}
              alt="Xcom"
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center"
            />
          </a>
          <a
            href={'https://www.youtube.com/channel/UCbSF_MEdOdshf3QvglvBflQ'}
            target="_blank"
          >
            <Image
              src={UtubeImg}
              alt="UtubeImg"
              height={20}
              width={27}
              className="h-[20px] w-[27px] cursor-pointer object-contain object-center"
            />
          </a>
          <a href={'https://www.instagram.com/apisindialtd/'} target="_blank">
            <Image
              src={InstaImg}
              width={21}
              height={21}
              alt="InstaImg"
              className="h-[21px] w-[21px] cursor-pointer object-contain object-center"
            />
          </a>
          <a
            href={'https://www.linkedin.com/showcase/apisindia/'}
            target="_blank"
          >
            <Image
              src={LinkImg}
              alt="LinkImg"
              height={21}
              width={21}
              className="h-[21px] w-[21px] cursor-pointer object-contain object-center"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default BrewerLoginHeader
