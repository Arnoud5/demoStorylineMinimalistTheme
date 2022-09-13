import React from "react"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useNavigate } from 'react-router-dom';

const MessageRsvp = ({ messages }) => {
  // const navigate = useNavigate();

  // const handleAllMessage = () => navigate('/messages')

  const handleAllMessage = () => {

  }

  return (
    <>
      {messages && (
        <div className="w-full pt-2 pb-4"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <div className="flex justify-end mr-10">
            <button onClick={handleAllMessage} className=" font-madeCanvas font-bold px-3 text-sky-500 py-2">
              lihat Semua
            </button>
          </div>
          <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={20}
            totalSlides={messages?.length}
          >
            <Slider>
              {messages?.map((message) => (
                <Slide key={message?._id} index={message?._id}>
                  <div className="w-10/12 mx-auto bg-[#D9D9D9] rounded-xl p-3 h-fit ">
                    <div className="flex justify-start py-1">
                      <p className="font-bold">{message?.from}</p>
                      <p className="ml-1"><i>
                        {
                          message?.presence !== " " && (
                            `(${message?.presence})`
                          )
                        }
                      </i></p>
                    </div>
                    <p className="line-clamp-4 h-fit">{message?.message}</p>
                  </div>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      )}
    </>
  )
}

export default MessageRsvp;
