import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Img1 from "./Img1.png"
import Img2 from "./Img2.png"
import Img3 from "./Img3.png"
import Img4 from "./Img4.png"
import Img5 from "./Img5.png"
import Img6 from "./Img6.png"

const Galery = () => {
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
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
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

                                    <img className="w-11/12 mx-auto h-full object-cover" src={item.img} alt={item.img} loading="lazy" />
                                    {/* <div className="w-11/12 mx-auto h-full rounded-3xl"
                                        style=
                                        {{
                                            backgroundImage: "url(" + item.img + ")",
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center"
                                        }}
                                    ></div> */}
                                </Slide>
                            ))
                        }

                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Galery;