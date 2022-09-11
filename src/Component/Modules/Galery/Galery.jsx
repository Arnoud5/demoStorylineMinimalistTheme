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
                        <Slide index={0}>
                            
                            <img className="mx-auto my-auto h- w-auto" src={Img1} alt="" />
                        </Slide>
                        <Slide index={1}>
                            <img className="mx-auto my-auto h-full" src={Img2} alt="" />
                        </Slide>
                        <Slide index={2}>
                            <img className="mx-auto my-auto h-full" src={Img3} alt="" />
                        </Slide>
                        <Slide index={3}>
                            <img className="mx-auto my-auto h-full" src={Img4} alt="" />
                        </Slide>
                        <Slide index={4}>
                            <img className="mx-auto my-auto h-full" src={Img5} alt="" />
                        </Slide>
                        <Slide index={5}>
                            <img className="mx-auto my-auto h-full" src={Img6} alt="" />
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Galery;