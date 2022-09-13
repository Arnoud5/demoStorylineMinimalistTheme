import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AllMessage = () => {

  const navigate = useNavigate()

  const [messages, setMessages] = useState(null)

    useEffect(() => {
      (async() => {
        const url = 'http://whatsapp.storylinesmile.tech/api/rsvp';
        const result = await axios.get(url)

        setMessages(result?.data?.messages);
      })()
    }, [])

  const handleBack = () => navigate('/')

  return (
    <div className="bg-[#EBEDE0] max-w-md h-full min-h-screen px-4 py-4 mx-auto">
      <button onClick={handleBack} className="flex items-center gap-x-2">
        <iconify-icon icon="ep:arrow-left-bold" className="text-xl" />
        <p>Kembali</p>
      </button>

      { messages && (
        <div className="flex flex-col gap-y-5 mt-7 overflow-y-scroll h-screen pb-20">
          { messages?.map(message => (
            <div className="w-10/12 mx-auto bg-[#D9D9D9] rounded-xl p-3 h-fit ">
              <div className="flex justify-start py-1">
                <p className="font-bold">{message?.from}</p>
                <p className="ml-1">{message?.presence}</p>
              </div>
              <p className="truncate h-16">{message?.message}</p>
            </div>
          )) }
        </div>
      )}
    </div>
  )
}

export default AllMessage;