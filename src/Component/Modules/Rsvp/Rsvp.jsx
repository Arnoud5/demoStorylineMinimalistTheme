import axios from "axios";
import React, { useEffect, useState } from "react";

import RsvpBg from "./Assets/bg-rsvp.png"
import FormRsvp from "./FormRsvp";
import Galery from "./Galery";
import MessageRsvp from "./messageRsvp";

const Rsvp = () => {
    const [messages, setMessages] = useState(null)

    useEffect(() => {
      (async() => {
        const url = 'http://whatsapp.storylinesmile.tech/api/rsvp';
        const result = await axios.get(url)

        setMessages(result?.data?.messages);
      })()
    }, [])

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

            <MessageRsvp messages={messages} />

            <Galery />
        </div>
    )
}

export default Rsvp;