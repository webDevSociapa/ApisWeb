'use client'

import Image from 'next/image'

import FbImg from '@/assets/images/social/fb.png'
import InstaImg from '@/assets/images/social/insta.png'
import LinkImg from '@/assets/images/social/link-din.png'
import UtubeImg from '@/assets/images/social/utube.png'
import Xcom from '@/assets/images/social/xcom.png'
import FbHover from '@/assets/images/home-banner-section/fbhover.webp'
import TwitterHover from '@/assets/images/home-banner-section/twitterHover.png'
import YouTubeHover from '@/assets/images/home-banner-section/youtubeHover.jpg'
import LinkedinHover from '@/assets/images/home-banner-section/lnkedinHover.png'
import InstaHover from '@/assets/images/home-banner-section/instaHover.png'

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
        <a
  href="https://www.facebook.com/apisindialtd"
  target="_blank"
  className="flex items-center justify-center group"
>
  <Image
    src={FbImg} 
    alt="FbImg"
    height={21}
    width={20}
    className="h-[21px] w-[20px] cursor-pointer object-contain object-center group-hover:hidden"
  />
  <Image
    src={FbHover} // This is the colored version for hover
    alt="FbImgHover"
    height={21}
    width={20}
    className="h-[31px] w-[30px] cursor-pointer object-contain object-center hidden group-hover:block"
  />
</a>


<a
  href={'https://x.com/apis_india'}
  target="_blank"
  className="flex items-center justify-center group"
>
  <Image
    src={Xcom} 
    alt="XImg"
    height={21}
    width={20}
    className="h-[21px] w-[20px] cursor-pointer object-contain object-center group-hover:hidden"
  />
  <Image
    src={TwitterHover} // This is the colored version for hover
    alt="XImgHover"
    height={21}
    width={20}
    className="h-[31px] w-[30px] cursor-pointer object-contain object-center hidden group-hover:block"
  />
</a>
          <a
            href={'https://www.youtube.com/channel/UCbSF_MEdOdshf3QvglvBflQ'}
            target="_blank"
            className="flex items-center justify-center group"

          >
            <Image
              src={UtubeImg}
              alt="UtubeImg"
              height={20}
              width={27}
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center group-hover:hidden"
              />
            <Image
              src={YouTubeHover}
              alt="UtubeImg"
              height={20}
              width={27}
              className="h-[31px] w-[30px] cursor-pointer object-contain object-center hidden group-hover:block"
              />
          </a>
          <a href={'https://www.instagram.com/apisindialtd/'} target="_blank"
            className="flex items-center justify-center group"
          >
            <Image
              src={InstaImg}
              width={21}
              height={21}
              alt="InstaImg"
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center group-hover:hidden"
            />
            <Image
              src={InstaHover}
              width={21}
              height={21}
              alt="InstaImg"
              className="h-[31px] w-[30px] cursor-pointer object-contain object-center hidden group-hover:block"
            />
          </a>
          <a
            href={'https://www.linkedin.com/showcase/apisindia/'}
            target="_blank"
            className="flex items-center justify-center group"
          >
            <Image
              src={LinkImg}
              alt="LinkImg"
              height={21}
              width={21}
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center group-hover:hidden"
            />
            <Image
              src={LinkedinHover}
              alt="LinkImg"
              height={21}
              width={21}
              className="h-[41px] w-[40px] cursor-pointer object-contain object-center hidden group-hover:block"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default BrewerLoginHeader
