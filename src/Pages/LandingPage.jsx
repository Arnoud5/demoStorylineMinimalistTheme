import React, { useEffect } from "react";
// aos motion library
import Aos from "aos";
import "aos/dist/aos.css"
// Page Modules
import PopUp from "../Component/Modules/PopUp/PopUp";
import NavbarTop from "../Component/common/NavbarTop/NavbarTop";
import WeddingOf from "../Component/Modules/WeddingOf";
import SaveTheDate from "../Component/Modules/SaveTheDate";
import Gift from "../Component/Modules/Gift";
import Doa from "../Component/Modules/Doa";
import NavbarBottom from "../Component/common/NavbarBottom/NavbarBottom";
import Galery from "../Component/Modules/Galery/Galery";
import Rsvp from "../Component/Modules/Rsvp/Rsvp";
// import MusicComponent from "../Component/common/Music";
import ReactAudioPlayer from "react-audio-player";

import Hapiness from "./hapiness.mp3"
import { useState } from "react";

const LandingPage = () => {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])

    const renderAudio = () => {
        return (
            <ReactAudioPlayer
                src={Hapiness}
                autoPlay={true}
            />
        )
    }

    return (
        <div className="max-w-md mx-auto relative">
            <ReactAudioPlayer
                src={Hapiness}
                autoPlay={true}
            />
            {/* popUp */}
            <PopUp />
            <div className="h-fit bg-[#EBEDE0]" >
                <div className="landing-page"
                >
                    <NavbarTop />
                    <WeddingOf />
                    <Doa />
                    <SaveTheDate />
                    <Rsvp />                    
                    <Galery />
                    <Gift />
                </div>
            </div>
            <NavbarBottom />
        </div>
    )
}

export default LandingPage;