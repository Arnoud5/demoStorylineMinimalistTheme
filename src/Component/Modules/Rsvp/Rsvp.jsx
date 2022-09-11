import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import RsvpBg from "./bg-rsvp.png"

const Rsvp = () => {
    return (
        <div className="w-full bg-[#EBEDE0]"
            style=
            {{
                backgroundImage: `url(${RsvpBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center"
            }}
        >
            <div className="text-center"
                id="rsvp"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="ease-in-out"
            >
                <h2 className="text-2xl font-madeCanvas">
                    UCAPAN & RSVP
                </h2>
            </div>

            <div className="flex flex-col font-madeCanvas text-base"
                id="rsvp"
            >
                <div
                    data-aos="zoom-in"
                    data-aos-offset="10"
                    data-aos-easing="ease-in-out"
                >

                    <div className="flex flex-col w-10/12 mx-auto">
                        <label htmlFor="kepada">Kepada:</label>
                        <input
                            className="focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#AFABAB] rounded-full px-3 font-semibold"
                            id="kepada" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
                        />
                        <label htmlFor="ucapan">Ucapan:</label>
                        <textarea
                            className="h-24 focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#AFABAB] rounded-xl px-3 font-semibold"
                            id="ucapan" cols="50" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
                        />
                        <label htmlFor="kehadiran">Kehadiran:</label>
                        <input
                            className="focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#EBEDE0] rounded-full px-3 font-semibold"
                            id="kehadiran" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
                        />
                    </div>
                    <div className="w-10/12 mx-auto py-3">
                        <button className="block bg-[#AFABAB] px-6 py-1 rounded-full text-white">Kirim</button>
                    </div>
                </div>
            </div>
            <div className="w-full pt-2 pb-8"
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-out"

            >
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={50}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="w-10/12 mx-auto bg-[#D9D9D9] rounded-xl p-3 h-fit ">
                                <div className="flex justify-start py-1">
                                    <p className="font-bold">Oliver</p>
                                    <p className="ml-1">(Hadir)</p>
                                </div>
                                <p className="truncate h-16">Nec ipsum, vestibulum non lectus. Viverra lorem sed feugiat ut aliquam morbi eu sapien, odio. Vitae turpis ultrices mauris in congue erat habitant sem duis.
                                    Nec ipsum, vestibulum non lectus. Viverra lorem sed feugiat ut aliquam morbi eu sapien, odio. Vitae turpis ultrices mauris in congue erat habitant sem duis
                                </p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="w-10/12 mx-auto bg-[#D9D9D9] rounded-xl p-3">
                                <div className="flex justify-start py-1">
                                    <p className="font-bold">Oliver</p>
                                    <p className="ml-1">(Hadir)</p>
                                </div>
                                <p className="truncate h-16">Nec ipsum, vestibulum non lectus. Viverra lorem sed feugiat ut aliquam morbi eu sapien, odio. Vitae turpis ultrices mauris in congue erat habitant sem duis.</p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="w-10/12 mx-auto bg-[#D9D9D9] rounded-xl p-3">
                                <div className="flex justify-start py-1">
                                    <p className="font-bold">Oliver</p>
                                    <p className="ml-1">(Hadir)</p>
                                </div>
                                <p className="truncate h-16">Nec ipsum, vestibulum non lectus. Viverra lorem sed feugiat ut aliquam morbi eu sapien, odio. Vitae turpis ultrices mauris in congue erat habitant sem duis.</p>
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Rsvp;