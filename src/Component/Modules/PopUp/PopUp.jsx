import React from "react";
import LeafBG from "./pngwing.png"
import TextBG from "./textBG.svg"

import { Link } from "react-scroll";
import { useContext } from "react";
import MusicContext from "../../../context/MusicProvider";

const PopUp = ({ setOpenmsg }) => {
    const { name } = useContext(MusicContext)

    const handleOpenMessage = () => {
        return setOpenmsg(false)
    }

    return (
        <div className="pop-up z-20 w-full h-screen">
            <div className="bg-[#EBEDE0] w-full h-screen flex flex-col absolute"
                style={{ display: "block" }}
            >
                <div className="w-full"
                    style={{
                        backgroundImage: "url(" + TextBG + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left center",
                        height: "40vh",
                    }}>
                </div>
                <div className="w-full"
                    style={{
                        backgroundImage: "url(" + LeafBG + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right top",
                        height: "60vh",
                    }}>
                </div>
            </div>
            <div className="absolute w-11/12 h-fit text-right top-0 font-madeCanvas">
                <div className="w-full h-screen flex flex-col justify-center items-end">
                    <h1 className="text-[50px] font-light leading-[90px]">
                        Anggi<br />& Yudha
                    </h1>
                    <h2 className="text-[20px] my-2 leading-7 font-medium">
                        Kepada YTH:<br />
                        <span className="underline underline-offset-4">
                            {
                                name && (name)
                            }
                            {
                                !name && ("Bapak/Ibu")
                            }
                        </span><br />
                        (DITEMPAT)
                    </h2>
                    <Link to="weddingof" offset={-60} smooth={true} spy={true}>
                        <button
                            onClick={handleOpenMessage}
                            className="button-buka-undangan 
                            hover:bg-[#cac9c9] active:bg-[#D9D9D9] focus:outline-none focus:ring hover:ring 
                            focus:ring-[#D9D9D9] hover:ring-[#D9D9D9]
                            text-[12px] font-black px-3 py-1 text-white rounded-full bg-[#AFABAB]">
                            BUKA UNDANGAN
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PopUp;