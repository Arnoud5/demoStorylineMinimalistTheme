import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";


// import MusicWedding from "./song-happiness.ogg"
// import ReactAudioPlayer from 'react-audio-player'


const NavbarBottom = () => {
    const play = () => {

    }
    return (
        <div className="bg-black flex max-w-md w-full fixed  bottom-0 p-2 justify-evenly items-center z-10">
            {/* <ReactAudioPlayer
                src={MusicWedding}
                autoPlay
            /> */}
            <Link activeClass="active" to="weddingof" offset={-60} smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="ant-design:home-filled" color="white" />
            </Link>
            <Link to="doa" smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="icon-park-solid:diamond-ring" color="white" />
            </Link>
            <Link to="savethedate" smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="uis:calender" color="white" />
            </Link>
            <Link to="rsvp" smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="bxs:comment-detail" color="white" />
            </Link>
            <Link to="gift" smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="fa:gift" color="white" />
            </Link>

            <Icon className="w-7 h-auto" onClick={play()} icon="akar-icons:music-note" color="white" />
        </div>
    )
}

export default NavbarBottom;