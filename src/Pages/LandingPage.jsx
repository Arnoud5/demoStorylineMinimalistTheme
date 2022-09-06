import React from "react";
import PopUp from "../Component/Modules/PopUp/PopUp";

// Navbar Top
import logoRSVP from "../Component/common/NavbarTop/logo-rsvp.svg"
import logoAY from "../Component/common/NavbarTop/logo-AY.svg"
import logoSL from "../Component/common/NavbarTop/logo-Storyline.svg"

// Home Wedding of
import wingDate from "./wing-date.svg"
import HeroImg from "./Hero-img.svg"

// Doa
import DoaYudha from "./doa-yudha.svg"
import DoaAnggi from "./doa-anggi.svg"

// Gift Page
import LogoBca from "./logo-bca.svg"

// Page Modules
import SaveTheDate from "../Component/Modules/SaveTheDate";

const LandingPage = () => {
    return (
        <div className="max-w-md mx-auto relative">
            {/* popUp */}
            <PopUp />
            <div className="h-fit bg-[#EBEDE0]" >
                <div className="landing-page"
                    style={{ display: "none" }}
                >
                    {/* top Navbar */}
                    <div className="bg-black">
                        <div className="w-11/12 mx-auto flex justify-between items-center py-2">
                            <div>
                                <img className="w-9" src={logoAY} alt="logo Anggi dan Yudha" />
                            </div>
                            <div>
                                <img src={logoSL} alt="logo Stooryline" />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-white font-madeCanvas font-semibold">RSVP</p>
                                <img className="w-7" src={logoRSVP} alt="rsvp logo" />
                            </div>
                        </div>
                    </div>
                    {/* The Wedding of Page */}
                    <div className="h-auto flex flex-col justify-around"
                        style={{
                            // display: "none"
                        }}
                    >
                        {/* hero img */}
                        <div className="hero-img flex justify-center items-end font-madeCanvas text-3xl leading-8 font-medium text-center">
                            <p className="hero-img-text-shadow">A<br />N<br />G<br />G<br />I</p>
                            <div className="w-4/5 xxs:w-auto">
                                <img src={HeroImg} alt="foto Anggi dan Yudha" />
                            </div>
                            <p className="hero-img-text-shadow">Y<br />U<br />D<br />H<br />A</p>
                        </div>
                        {/* hero img */}

                        {/* Date */}
                        <div className="relative h-auto">
                            <div className="flex justify-around xxs:h-40">
                                <img src={wingDate} alt="decoration" />
                                <img className="scale-x-[-1]" src={wingDate} alt="decoration" />
                            </div>
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                <p className="underline font-magesta text-4xl">22.09.22</p>
                            </div>
                        </div>
                        {/* Date */}
                    </div>
                    {/* Wedding of Page End */}

                    {/* Doa Page */}
                    <div className="w-fit bg-[#EBEDE0]">
                        <div className="pt-10 pb-16">
                            <div className="mx-5 py-3">
                                <h2 className="text-xl text-center font-bold mb-4">
                                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
                                <p className="text-center font-madeCanvas text-base">
                                    Assalamualaikum Warakhmatullahi Wabarakatuhu,  dengan memohon ridho Allah SWT, yang telah menciptakan makhluknya berpasang-pasangan. Kami mohon Do’a restu untuk pernikahan putra-putri kami :
                                </p>
                            </div>
                            <div>
                                {/* Anggi */}
                                <div className="relative">
                                    <img src={DoaAnggi} alt="Foto Mempelai Wanita Anggi Rafika" />
                                    <div className="absolute left-2 -bottom-5">
                                        <h3 className="text-center text-5xl font-creattionDemo">
                                            Anggi<br />
                                            <span className="underline underline-offset-8">Rafika</span>
                                        </h3>
                                        <p className="text-center text-sm font-madeCanvas">Putri pertama dari<br />
                                            Bapak Muhtar Mustofa dan Ibu Nangimah
                                        </p>
                                    </div>
                                </div>
                                {/* anggi end */}
                                {/* Yudha */}
                                <div className="relative flex">
                                    <img className="ml-auto" src={DoaYudha} alt="Foto mempelai pria Yudha Prabowo" />
                                    <div className="absolute -bottom-5 right-2">
                                        <h3 className="text-center text-5xl font-creattionDemo">
                                            Yudha<br />
                                            <span className="underline underline-offset-8">Prabowo</span>
                                        </h3>
                                        <p className="text-center text-sm font-madeCanvas">Putra pertama dari<br />
                                            Bapak Subani dan Ibu Dwi Kunarti
                                        </p>
                                    </div>
                                </div>
                                {/* yudha end */}
                            </div>
                        </div>
                    </div>
                    {/* Doa Page end*/}
                    <SaveTheDate />
                    {/* Ucapan dan RSVP Page */}
                    {/* Ucapan dan RSVP Page End*/}

                    {/* Galery Page */}
                    {/* Galery Page End */}

                    {/* Gift Page */}
                    <div className="h-auto bg-[#EBEDE0] py-24">
                        <div className="h-fit py-14 px-5 w-11/12 mx-auto bg-[#D9D9D9] text-center rounded-xl font-madeCanvas"
                            style={{ backgroundColor: "rgba(217, 217, 217, 0.7)" }}
                        >
                            <h2 className="font-creattionDemo font-normal text-4xl mb-4">Gift</h2>
                            <p className="font-medium">Do’a restu anda merupakan karunia yang sangat berarti bagi kami. Tanpa mengurangi rasa hormat, dan untuk melengkapi kebahagiaan pengantin anda dapat memberi tanda kasih disini :</p>
                            {/* BCA */}
                            <div className="rounded-xl w-11/12 xxs:w-2/3 mx-auto h-28 shadow-md m-8"
                                style={{ background: "linear-gradient(179.5deg, #FFFFFF 0.43%, #969696 123.38%)" }}
                            >
                                <div className="m-4 flex flex-col font-magesta text-base">
                                    <img className="w-16 xss:w-24 h-auto self-end" src={LogoBca} alt="logo BCA" />
                                    <p className="self-start">
                                        2521389658
                                        <span className="text-[#0038FF]">
                                            (Copy)
                                        </span>
                                    </p>
                                    <p className="self-start">a.n : Yudha Prabowo</p>
                                </div>
                            </div>
                            {/* BCA */}
                            <p>
                                وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                            </p>
                            <p className="font-madeCanvas">
                                <br />
                                "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." (QS Ar Rum : 21).
                            </p>
                            <div className="my-7 text-xl">
                                <p>
                                    Turut berbahagia segenap keluarga besar
                                </p>
                                <p className="font-creattionDemo text-3xl leading-loose">Yudha & Anggi</p>
                            </div>
                        </div>
                    </div>
                    {/* Gift Page End*/}
                    {/* Bottom Navbar */}
                </div>
            </div>
        </div>
    )
}

export default LandingPage;