import React from "react";
import PopUp from "../Component/Modules/PopUp/PopUp";

// Navbar Top
import logoRSVP from "../Component/common/NavbarTop/logo-rsvp.svg"
import logoAY from "../Component/common/NavbarTop/logo-AY.svg"
import logoSL from "../Component/common/NavbarTop/logo-Storyline.svg"

// Home Wedding of
import wingDate from "./wing-date.svg"
import HeroImg from "./Hero-img.svg"

const LandingPage = () => {
    return (
        <div className="max-w-md mx-auto relative">
            {/* popUp */}
            <PopUp />
            <div className="h-screen bg-[#EBEDE0]">


                {/* top Navbar */}
                <div className="bg-black">
                    <div className="w-11/12 mx-auto flex justify-between items-center py-2">
                        <div>
                            <img className="w-9" src={logoAY} alt="logo Anggi dan Yudha" />
                        </div>
                        <div>
                            <img src={logoSL} alt="logo Stooryline" />
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-white font-madeCanvas font-semibold">RSVP</p>
                            <img className="w-7" src={logoRSVP} alt="rsvp logo" />
                        </div>
                    </div>
                </div>
                {/* The Wedding of Page */}
                <div className="h-auto flex flex-col justify-around"
                    style={{
                        // display: "none"
                    }}
                >
                    {/* hero img */}
                    <div className="hero-img flex justify-center items-end font-madeCanvas text-3xl leading-8 font-medium text-center">
                        <p className="hero-img-text-shadow">A<br/>N<br/>G<br/>G<br/>I</p>
                        <img src={HeroImg} alt="foto Anggi dan Yudha" />
                        <p className="hero-img-text-shadow">Y<br/>U<br/>D<br/>H<br/>A</p>
                    </div>
                    {/* hero img */}

                    {/* Date */}
                    <div className="relative">
                        <div className="flex justify-between ">
                            <img src={wingDate} alt="decoration" />
                            <img className="scale-x-[-1]" src={wingDate} alt="decoration" />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                            <p className="underline font-magesta text-4xl">22.09.22</p>
                        </div>
                    </div>
                    {/* Date */}
                </div>





                {/* Bottom Navbar */}
            </div>
        </div>
    )
}

export default LandingPage;