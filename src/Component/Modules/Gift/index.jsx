import React from "react";

import LogoBca from "./logo-bca.png"
import BgGift from "./bggift.png"

const Gift = () => {

    const copyREK = () => {
        navigator.clipboard.writeText(2521389658)
    }
    return (
        <div className="h-auto bg-[#EBEDE0] py-24"
            id="gift"
            style={{
                backgroundImage: `url(${BgGift})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center "
            }}
        >
            <div className="h-fit py-14 px-5 w-11/12 mx-auto bg-[#D9D9D9] text-center rounded-xl font-madeCanvas"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.7)" }}
                data-aos="zoom-in-down"
                data-aos-offset="0"
                data-aos-easing="ease-in-out"
                data-aos-delay="300"
            >
                <h2 className="font-creattionDemo font-normal text-4xl mb-4">Gift</h2>
                <p className="font-medium">Do’a restu anda merupakan karunia yang sangat berarti bagi kami. Tanpa mengurangi rasa hormat, dan untuk melengkapi kebahagiaan pengantin anda dapat memberi tanda kasih disini :</p>
                {/* BCA */}
                <div className="rounded-xl w-11/12 xxs:w-2/3 mx-auto h-28 shadow-md m-8"
                    style={{ background: "linear-gradient(179.5deg, #FFFFFF 0.43%, #969696 123.38%)" }}
                >
                    <div className="m-4 flex flex-col font-magesta text-base">
                        <img className="w-16 xss:w-24 h-auto self-end" src={LogoBca} alt="logo BCA" />
                        <div className="flex justify-start items-center">
                            <p className="">
                                2521389658
                            </p>
                            <button onClick={copyREK}
                                className="pt-2 p-1 ml-2 text-[#0038FF] active:bg-black focus:bg-black active:text-white focus:text-white select-none rounded-xl
                            ">
                                ( Copy )
                            </button>
                        </div>
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
    )
}

export default Gift;