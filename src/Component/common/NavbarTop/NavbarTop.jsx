import React from "react";
import { Link } from "react-scroll";

import LogoAY from "../NavbarTop/logo-AY.svg"
import LogoSL from "../NavbarTop/logo-Storyline.png"
import LogoRSVP from "../NavbarTop/logo-rsvp.svg"

const NavbarTop = () => {
    return (
        <div className="bg-black sticky top-0 z-10">
            <div className="w-11/12 mx-auto flex justify-between items-center py-2 relative">
                <div>
                    <img className="w-9" src={LogoAY} alt="logo Anggi dan Yudha" />
                </div>
                <div className="absolute w-full flex justify-center">
                    <img src={LogoSL} alt="logo Stooryline" />
                </div>
                <Link to="rsvp" smooth={true} spy={true}>
                    <div className="flex justify-center items-center">
                        <p className="text-white font-madeCanvas font-semibold">RSVP</p>
                        <img className="w-7" src={LogoRSVP} alt="rsvp logo" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default NavbarTop;