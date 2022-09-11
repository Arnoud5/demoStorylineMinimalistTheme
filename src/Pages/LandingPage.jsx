import React, { useEffect } from "react";

// aos motion library
import Aos from "aos";
import "aos/dist/aos.css"

import RsvpBg from "./bg-rsvp.png"

// Page Modules
import PopUp from "../Component/Modules/PopUp/PopUp";
import NavbarTop from "../Component/common/NavbarTop/NavbarTop";
import WeddingOf from "../Component/Modules/WeddingOf";
import SaveTheDate from "../Component/Modules/SaveTheDate";
import Gift from "../Component/Modules/Gift";
import Doa from "../Component/Modules/Doa";
import NavbarBottom from "../Component/common/NavbarBottom/NavbarBottom";

const LandingPage = () => {

    useEffect(() => {
        Aos.init({
            once: false,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="max-w-md mx-auto relative">
            {/* popUp */}
            <PopUp />
            <div className="h-fit bg-[#EBEDE0]" >
                <div className="landing-page"
                >
                    <NavbarTop />
                    <WeddingOf />
                    <Doa />
                    <SaveTheDate />
                    {/* Ucapan dan RSVP Page */}
                    <div className="w-full bg-[#EBEDE0]"
                        id="rsvp"
                        data-aos="zoom-in"
                        data-aos-offset="10"
                        data-aos-easing="ease-in-out"
                        style=
                        {{
                            backgroundImage: `url(${RsvpBg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top center"
                        }}
                    >
                        <div className="text-center">
                            <h2 className="text-2xl font-madeCanvas">
                                UCAPAN & RSVP
                            </h2>
                        </div>
                        <div className="flex flex-col font-madeCanvas text-base">
                            <div className="flex flex-col w-10/12 mx-auto">
                                <label htmlFor="kepada">Kepada:</label>
                                <input
                                    className="focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#EBEDE0] rounded-full px-3 font-semibold"
                                    id="kepada" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
                                />
                                <label htmlFor="ucapan">Ucapan:</label>
                                <input
                                    className="focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#EBEDE0] rounded-full px-3 font-semibold"
                                    id="ucapan" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
                                />
                                <label htmlFor="kehadiran">Kehadiran:</label>
                                <input
                                    className="focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#EBEDE0] rounded-full px-3 font-semibold"
                                    id="kehadiran" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
                                />
                            </div>
                            <div className="w-10/12 mx-auto py-3">
                                <button className="block bg-[#AFABAB] px-6 py-1 rounded-full text-white">Kirim</button>
                            </div>
                        </div>
                        <div className="text-center">
                            ini sliderrrrr
                        </div>
                    </div>
                    {/* Ucapan dan RSVP Page End*/}
                    <div className="w-full bg-[#EBEDE0]"
                        data-aos="fade-down"
                        data-aos-offset="10"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="text-center">
                            <h2 className="text-2xl font-madeCanvas">
                                Gallery Of<br />
                                <span className="font-creattionDemo">
                                    Yudha & Anggi
                                </span>
                            </h2>
                        </div>
                        <div className="text-center">
                            ini sliderrrrr
                        </div>
                    </div>
                    {/* Galery Page */}
                    {/* Galery Page End */}
                    <Gift />

                    {/* Bottom Navbar */}
                </div>
                <NavbarBottom />
            </div>
        </div>
    )
}

export default LandingPage;