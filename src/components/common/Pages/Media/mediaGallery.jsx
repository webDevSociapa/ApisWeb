"use client"

import { useEffect, useState } from "react";
import EmblaCarousel from "../../Carousel/Carousel";
import Image from "next/image";
import axios from "axios";

export default function MediaGalleryData() {
    const OPTIONS = { loop: true };
    const [mediaData, setMediaData] = useState([])

    useEffect(() => {
        const fetchMediaData = async () => {
            try {
                const response = await axios.get("/api/mediaGallery");
                setMediaData(response.data)
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchMediaData()
    }, [])

    return (
        <>
            <div className="w-full bg-[#FFF9F0] flex flex-col items-center justify-center py-4 md:py-14">
                <p className="font-medium text-center text-[#585858] text-sm  md:text-xl font-jost">
                    DISCOVER OUR LATEST EVENTS
                </p>
                <p className="font-bold text-[20px] text-center text-[#9F7B49] md:text-[40px] font-literata">
                    Media Gallery
                </p>
                <p className="font-medium mt-2 text-center text-xs md:text-lg text-[#666666] font-jost">
                    Intentions may lay the foundation, but it's our actions that build the
                    world we live in.
                </p>
                <div className="py-6 md:py-10 w-[90%] flex items-center justify-center">
                    <EmblaCarousel options={{ loop: true }}>
                        {mediaData?.map((itm, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__number">
                                    <div>
                                        <div className="mx-3 border">
                                            <Image
                                                src={itm?.mediaGallery}
                                                height={250}
                                                width={250}
                                                alt="header-logo"
                                                className="w-[250px] md:w-[400px] h-[250px] md:h-[345px]"
                                            />
                                        </div>
                                        <div className="py-3 text-sm md:text-xl text-[#3A3A3A] border border-[#9F7B49] font-normal bg-[#fff] text-center truncate font-jost">
                                            {itm?.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </EmblaCarousel>
                </div>
            </div>
        </>
    )
}