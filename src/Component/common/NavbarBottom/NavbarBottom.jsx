import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { useContext } from "react";
import MusicContext from "../../../context/MusicProvider";

const NavbarBottom = () => {

    const { playMusic, setPlayMusic } = useContext(MusicContext)

    const play = () => {
        if (playMusic) {
            return setPlayMusic(false);
        } else {
            return setPlayMusic(true);
        }
    }
    return (
        <div className="bg-black flex max-w-md w-full fixed  bottom-0 p-2 justify-evenly items-center z-10">
            <Link activeClass="active" to="weddingof" offset={-85} smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="ant-design:home-filled" color="white" />
            </Link>
            <Link to="doa" smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="icon-park-solid:diamond-ring" color="white" />
            </Link>
            <Link to="savethedate" smooth={true} spy={true}>
                <Icon className="w-7 h-auto" icon="uis:calender" color="white" />
            </Link>
            <Link to="rsvp" smooth={true} offset={-30} spy={true}>
                <Icon className="w-7 h-auto" icon="bxs:comment-detail" color="white" />
            </Link>
            <Link to="gift" smooth={true} offset={-20} spy={true}>
                <Icon className="w-7 h-auto" icon="fa:gift" color="white" />
            </Link>
            {
                playMusic ?
                    (
                        <Icon className="w-7 h-auto" onClick={play} icon="akar-icons:music-note" color="white" />
                    )
                    :
                    (
                        <Icon className="w-7 h-auto" onClick={play} icon="fluent:music-note-off-1-20-filled" color="white" />
                    )

            }

        </div>
    )
}

export default NavbarBottom;