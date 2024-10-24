"use client";

import { PATH_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/logo.png";
import FbImg from "@/assets/images/social/fb.png";
import InstaImg from "@/assets/images/social/insta.png";
import LinkImg from "@/assets/images/social/link-din.png";
import UtubeImg from "@/assets/images/social/utube.png";
import Xcom from "@/assets/images/social/xcom.png";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainFooter = () => {
  const routerPath = usePathname();
  const locale = routerPath.split("/")[1];


  return (
    <footer className="bottom-0 z-10 w-full bg-[#FFF9F0]">
      <div className="mx-auto flex w-full flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="mx-4 md:mx-10 my-4 md:my-10  w-[100px] md:w-[155px] md:block">
            <Link href={"/"} className="mb-0.5">
              <Image
                src={Logo}
                width={155}
                height={80}
                alt="header-logo"
                className="h-full w-full object-contain object-center"
              />
            </Link>
          </div>
          <div className="my-4 md:my-10 flex w-full flex-col gap-4 md:gap-10 border-s border-[#000000] px-4 md:px-10 max-[800px]:border-s-0">
            <div className="flex flex-wrap items-center gap-x-6 md:gap-x-12 gap-y-2  md:gap-y-4 whitespace-nowrap">
              {PATH_DATA.map((path) => {
                const tabUrlWithLocale = `/${locale}${path.url}`;

                return (
                  <Link
                    key={path.url}
                    href={path.url === "/our-brand" ? "#" : tabUrlWithLocale}
                    className={cn(
                      "w-fit text-sm md:text-lg font-bold text-[#9F7B49] lg:text-base lg:leading-3"
                    )}
                  >
                    {path.name}
                  </Link>
                );
              })}
              <Link
                href={"#"}
                className={cn(
                  "w-fit text-sm md:text-lg font-bold text-[#9F7B49] lg:text-base lg:leading-3"
                )}
              >
                {"Quick Links"}
              </Link>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4 md: gap-19rem">
              <div className="w-full md:w-1/2 flex items-start gap-4 text-[#9F7B49]">
                <div className="md:pt-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-lg md:text-xl"
                  />
                </div>
                <div className="text-sm md:text-base xl:text-lg">
                  <p>Apis Registered Office: </p>
                  <p>18/32 East Patel Nagar, New Delhi - 110008, India</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex gap-4 text-[#9F7B49]">
                <span className="md:pt-1">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-sm md:text-xl"
                  />
                </span>
                <span className="text-sm md:text-base xl:text-lg">+91-11-43206666</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="w-full md:w-1/2 flex gap-4 text-[#9F7B49]">
                <div className="md:pt-1">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-sm md:text-xl"
                  />
                </div>
                <div className="text-sm md:text-base xl:text-lg">
                  <p>Toll free number for Apis Customer Service: </p>
                  <p>+91-11-43206666</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex gap-4 text-[#9F7B49]">
                <span className="md:pt-1">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-base md:text-xl"
                  />
                </span>
                <span className="text-sm md:text-base xl:text-lg">mail@apisindia.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-t-zinc-300 p-4  md:px-6 lg:py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 text-sm font-normal md:justify-start lg:gap-8">
              <span className="cursor-pointer text-sm text-[#9F7B49] hover:text-activeGreen-500">
                Copy Right Reserved By ApisIndia.com
              </span>
              <span className="cursor-pointer text-sm text-[#9F7B49] hover:text-activeGreen-500">
                Disclaimer
              </span>
              <span className="cursor-pointer text-sm text-[#9F7B49] hover:text-activeGreen-500">
                Privacy Policy
              </span>
            </div>
            <div className="flex items-start md:items-center justify-start md:justify-center gap-5">
              <a href={"https://www.facebook.com/apisindialtd"} target="_blank">
                <Image
                  src={FbImg}
                  alt="FbImg"
                  height={21}
                  width={20}
                  className="h-[21px] w-[20px] cursor-pointer object-contain object-center"
                />
              </a>
              <a href={"https://x.com/apis_india"} target="_blank">
                <Image
                  src={Xcom}
                  height={21}
                  width={20}
                  alt="Xcom"
                  className="h-[21px] w-[20px] cursor-pointer object-contain object-center"
                />
              </a>
              <a
                href={
                  "https://www.youtube.com/channel/UCbSF_MEdOdshf3QvglvBflQ"
                }
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
              <a
                href={"https://www.instagram.com/apisindialtd/"}
                target="_blank"
              >
                <Image
                  src={InstaImg}
                  width={21}
                  height={21}
                  alt="InstaImg"
                  className="h-[21px] w-[21px] cursor-pointer object-contain object-center"
                />
              </a>
              <a
                href={"https://www.linkedin.com/showcase/apisindia/"}
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
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
