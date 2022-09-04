import React from "react";
import LeafBG from "./pngwing.svg"
import TextBG from "./textBG.svg"

const PopUp = () => {
    const BukaUndangan = () => {
        const popUp = document.querySelector(".pop-up");
        popUp.style.display = "none"
    }

    return (
        <div className="pop-up z-20">
            <div className="bg-[#EBEDE0] w-full h-full flex flex-col absolute" style={{display: "absolute"}}>
                <div className="w-full"
                    style={{
                        backgroundImage: "url(" + TextBG + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left center",
                        height: "60vh",
                    }}>
                </div>
                <div className="w-full"
                    style={{
                        backgroundImage: "url(" + LeafBG + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right top",
                        height: "100vh",
                    }}>
                </div>
            </div>
            <div className="absolute w-11/12 h-auto text-right top-1/3 font-madeCanvas">
                <h1 className="text-[50px] font-light leading-[90px]">
                    Anggi<br />& Yudha
                </h1>
                <h2 className="text-[20px] my-2 leading-7 font-medium">
                    Kepada YTH:<br />
                    <span className="underline underline-offset-4">OLIVER</span><br />
                    (DITEMPAT)
                </h2>
                <button onClick={BukaUndangan} className="button-buka-undangan text-[12px] font-black px-3 py-1 text-white rounded-full bg-[#AFABAB]">BUKA UNDANGAN</button>
            </div>
        </div>
    )
}

export default PopUp;