import Aos from "aos";
import React, { useEffect } from "react";

import bgDoa from "./Assets/bgDoa.png"
import fotoAnggi from "./Assets/doa-anggi.png"
import fotoYudha from "./Assets/doa-yudha.png"

const Doa = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="w-fit bg-[#EBEDE0] overflow-hidden relative"
            style={{
                backgroundImage: `url(${bgDoa})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center "
            }}
        >
            <div className="pt-10 pb-16">
                <div className="mx-5 py-3"
                    data-aos="fade-down"
                    data-aos-offset="10"
                    data-aos-easing="ease-in-out"
                >
                    <h2 className="text-xl text-center font-bold mb-4">
                        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
                    <p className="text-center font-madeCanvas text-base">
                        Assalamualaikum Warakhmatullahi Wabarakatuhu,  dengan memohon ridho Allah SWT, yang telah menciptakan makhluknya berpasang-pasangan. Kami mohon Do’a restu untuk pernikahan putra-putri kami :
                    </p>
                </div>
                <div>
                    {/* Anggi */}
                    <div className="relative"
                        data-aos="fade-up"
                        data-aos-offset="10"
                        data-aos-easing="ease-in-out"
                    >
                        <img className="-rotate-6 -ml-3" src={fotoAnggi} alt="Foto Mempelai Wanita Anggi Rafika" />
                        <div className="absolute left-2 -bottom-5">
                            <h3 className="text-center text-5xl font-creattionDemo">
                                Anggi<br />
                                <span className="underline underline-offset-8">Rafika</span>
                            </h3>
                            <p className="text-center text-sm font-madeCanvas z-10">Putri pertama dari<br />
                                Bapak Muhtar Mustofa dan Ibu Nangimah
                            </p>
                        </div>
                    </div>
                    {/* anggi end */}
                    {/* Yudha */}
                    <div className="relative flex justify-end pt-10"
                        data-aos="fade-up"
                        data-aos-offset="10"
                        data-aos-easing="ease-in-out"
                    >
                        <img className="-mr-3 rotate-6" src={fotoYudha} alt="Foto mempelai pria Yudha Prabowo" />
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
    )
}

export default Doa;