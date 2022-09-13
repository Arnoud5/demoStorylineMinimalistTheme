import React from "react";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import RsvpBg from "./Assets/bg-rsvp.png"
import Img1 from "./Assets/Img1.jpg"
import Img2 from "./Assets/Img2.jpg"
import Img3 from "./Assets/Img3.jpg"
import Img4 from "./Assets/Img4.jpg"
import Img5 from "./Assets/Img5.jpg"
import Img6 from "./Assets/Img6.jpg"
import FormRsvp from "./FormRsvp";

const Rsvp = () => {
    const images = [
        { id: 1, img: Img1 },
        { id: 2, img: Img2 },
        { id: 3, img: Img3 },
        { id: 4, img: Img4 },
        { id: 5, img: Img5 },
        { id: 6, img: Img6 }
    ]
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
                data-aos-delay="300"
            >
                <h2 className="text-2xl font-madeCanvas">
                    UCAPAN & RSVP
                </h2>
            </div>

            <FormRsvp />

            <div className="w-full pt-2 pb-8"
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-out"
                data-aos-delay="300"
            >
                <p className="w-10/12 mx-auto text-right font-madeCanvas font-bold text-sky-500">
                    lihat Semua
                </p>
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={20}
                    totalSlides={1}
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
                    </Slider>
                </CarouselProvider>
            </div>
            <div className="w-full bg-[#EBEDE0]"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-out"
                data-aos-delay="300"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-madeCanvas">
                        Gallery Of<br />
                        <span className="font-creattionDemo">
                            Yudha & Anggi
                        </span>
                    </h2>
                </div>
                <div className="w-11/12 pt-2 pb-8 mx-auto"
                    data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="300"
                >
                    <CarouselProvider
                        naturalSlideWidth={50}
                        naturalSlideHeight={40}
                        totalSlides={6}
                    >
                        <Slider>
                            {
                                images?.map((item) => (
                                    <Slide key={item.id} index={item.id}>
                                        <img className="w-11/12 mx-auto h-full object-cover rounded-3xl" src={item.img} alt={item.img} loading="lazy" />
                                    </Slide>
                                ))
                            }

                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default Rsvp;