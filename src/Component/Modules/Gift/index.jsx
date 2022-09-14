import React, { useState } from "react";

import LogoBca from "./logo-bca.png"
import BgGift from "./bggift.png"
import { useEffect } from "react";
import ErrorMessage from "../Rsvp/ErrorMessage";

const Gift = () => {

    // const [copy,setCopy] = useState(false)
    const [loader, setLoader] = useState(false)

    const copyREK = () => {
        navigator.clipboard.writeText(2521389658)
    }
    const handleCard = () => {
        setLoader(true)
    }

    useEffect(() => {
        if (loader) {
            setTimeout(() => {
                setLoader(false)
            }, 2000)
        }
    }, [loader])

    return (
        <div className="h-auto bg-[#EBEDE0] pt-5 pb-4"
            id="gift"
            style={{
                backgroundImage: `url(${BgGift})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center "
            }}
        >

            <div className="h-fit mb-12 py-4 px-5 w-11/12 mx-auto bg-[#D9D9D9] text-center rounded-xl font-madeCanvas"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.7)" }}
                data-aos="zoom-in-down"
                data-aos-offset="0"
                data-aos-easing="ease-in-out"
                data-aos-delay="300"
            >
                <h2 className="font-creattionDemo font-normal text-4xl mb-4">Gift</h2>
                <p className="font-medium">
                    Do’a restu anda merupakan karunia yang sangat berarti bagi kami. Tanpa mengurangi rasa hormat, dan untuk melengkapi kebahagiaan pengantin anda dapat memberi tanda kasih disini :
                </p>
                {/* BCA */}

                {
                    loader && (
                        <div className="absolute left-0 right-0 z-10">
                            <div className="p-12 m-12 absolute translate-x-1/2">
                                <ErrorMessage message="nomor rekening sudah tercopy" />
                            </div>
                        </div>
                    )
                }
                <div onClick={handleCard} className="rounded-xl w-11/12 xxs:w-11/12 h-fit mx-auto shadow-md m-8"
                    style={{ background: "linear-gradient(179.5deg, #FFFFFF 0.43%, #969696 123.38%)" }}
                >
                    <div className="m-4 flex flex-col font-magesta text-base p-4">
                        <img className="w-16 xss:w-24 h-auto self-end" src={LogoBca} alt="logo BCA" />
                        <div className="text-base flex justify-start items-center">
                            <p className="text-xs xxs:text-base">
                                2521389658
                            </p>
                            <button onClick={copyREK}
                                className="pt-2 p-1 ml-2 text-[#0038FF] active:bg-black focus:bg-black active:text-white focus:text-white select-none rounded-xl text-xs xxs:text-base
                            ">
                                ( Copy )
                            </button>
                        </div>
                        <p className="self-start text-xs xxs:text-base">a.n : Yudha Prabowo</p>
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
                <div className="mt-7 text-xl">
                    <p>
                        Turut berbahagia segenap keluarga besar
                    </p>
                    <p className="font-creattionDemo text-3xl leading-loose">
                        Yudha & Anggi
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gift;