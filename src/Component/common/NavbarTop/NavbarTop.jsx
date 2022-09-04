import React from "react";
import LogoAY from "../NavbarTop/logo-AY.svg"
import LogoSL from "../NavbarTop/logo-Storyline.svg"
import LogoRSVP from "../NavbarTop/logo-rsvp.svg"
const NavbarTop = () => {
    return (
        <>
            <div className="fixed flex justify-around items-center w-full bg-black"
            style={{display:"none"}}
            >
                <img src={LogoAY} alt="logo Anggi Yudha" />
                <img src={LogoSL} alt="logo Storyline" />
                <div className="flex">
                    <p className="text-white">RSVP</p>
                    <img src={LogoRSVP} alt="logo rsvp" />
                </div>
            </div>
            <div className="pt-8"></div>
        </>
    )
}
export default NavbarTop;