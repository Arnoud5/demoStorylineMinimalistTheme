import React from "react";
import LeafBG from "../Component/Modules/PopUp/pngwing.svg"
import TextBG from "../Component/Modules/PopUp/textBG.svg"

const LandingPage1 = () => {
    const BukaUndangan = () => {
        const popUp = document.querySelector(".pop-up");
        // popUp.addEventListener("focus", function () {
        //     popUp.style.transform = "translateY(-300px)"
        // })
        // popUp.style.transition = "transform 1s"
        popUp.style.transition = "display 4s"
        popUp.style.display = "none"
    }
    return (
        <div className="max-w-md mx-auto relative">
            {/* popUp */}
            <div className="bg-[#EBEDE0] h-screen flex flex-col">
                {/* <img className="w-2/3 self-start" src={TextBG} alt="" /> */}
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
                        backgroundPosition: "right center",
                        height: "100vh",
                    }}>
                </div>
                {/* <img className="h-1/2 self-end" src={LeafBG} alt="" /> */}
            </div>
            <div className="absolute w-11/12 h-auto text-right bottom-1/4 font-madeCanvas">
                <h1 className="text-[50px] font-light">
                    Anggi<br />& Yudha
                </h1>
                <h2 className="text-[20px] my-2">
                    Kepada YTH:<br />
                    <span className="underline underline-offset-4">OLIVER</span><br />
                    (DITEMPAT)
                </h2>
                <button onClick={BukaUndangan} className="button-buka-undangan text-[12px] font-black px-3 py-1 text-white rounded-full bg-[#AFABAB]">BUKA UNDANGAN</button>
            </div>
            {/* popUp */}

            {/*  */}


        </div>
    )
}

export default LandingPage1;