import React from "react";

import wingDate from "./pngwing1.png"
import HeroImg from "./Hero-img.png"

const WeddingOf = () => {

    return (
        <div className="h-auto flex flex-col justify-around pt-6 pb-20">
            {/* hero img */}
            <div id="weddingof" className=" w-10/12 mx-auto hero-img flex justify-center items-end font-madeCanvas text-3xl leading-8 font-medium text-center">
                <p className="hero-img-text-shadow"
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    A<br />N<br />G<br />G<br />I
                </p>
                <div className="w-4/5 h-auto xxs:w-auto"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    <img className="w-full" src={HeroImg} loading="lazy" alt="foto Anggi dan Yudha" />
                </div>
                <p className="hero-img-text-shadow"
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    Y<br />U<br />D<br />H<br />A
                </p>
            </div>
            {/* hero img */}

            {/* Date */}
            <div className="relative h-auto overflow-hidden"
                data-aos="fade-down"
            >
                <div className="flex justify-around xxs:h-40">
                    <img className="scale-x-[-1] w-24" src={wingDate} alt="decoration" loading="lazy" />
                    <img className="w-24" src={wingDate} alt="decoration" loading="lazy" />
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                    <p className="underline font-magesta text-4xl">22.09.22</p>
                </div>
            </div>
            {/* Date */}
        </div>
    )
}
export default WeddingOf;