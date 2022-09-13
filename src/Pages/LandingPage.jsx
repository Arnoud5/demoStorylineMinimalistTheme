import React, { useEffect, useState, useContext } from "react";
import MusicContext from "../context/MusicProvider";
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
import Rsvp from "../Component/Modules/Rsvp/Rsvp";
// import MusicComponent from "../Component/common/Music";
import ReactAudioPlayer from "react-audio-player";

import Hapiness from "./hapiness.mp3"
import { useParams } from "react-router-dom";

const LandingPage = () => {
    const { name } = useParams();

    const [openMsg, setOpenMsg] = useState(true);

    const { playMusic, setName } = useContext(MusicContext)

    useEffect(() => {
        Aos.init();
        Aos.refresh();
        putNameContext(name)
    }, [])

    const putNameContext = (text) => {
        setName(text);
    }
    return (
        <div className="max-w-md mx-auto relative">
            {
                openMsg && (
                    <PopUp setOpenmsg={setOpenMsg} />
                )
            }

            {
                !openMsg && (
                    <>
                        {
                            playMusic && (
                                <ReactAudioPlayer
                                    src={Hapiness}
                                    autoPlay={true}
                                    volume={0.5}
                                />
                            )
                        }
                        <div className="h-fit bg-[#EBEDE0]" >
                            <div className="landing-page">
                                <NavbarTop />
                                <WeddingOf />
                                <Doa />
                                <SaveTheDate />
                                <Rsvp />
                                <Gift />
                            </div>
                        </div>
                        <NavbarBottom />
                    </>
                )
            }

        </div>
    )
}

export default LandingPage;