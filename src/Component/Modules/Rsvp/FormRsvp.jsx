import React, { useEffect, useState } from "react"
import axios from "axios"
import LoaderRing from "../../common/Loaders/Ring/index"
import ErrorMessage from './ErrorMessage'

const FormRsvp = () => {

  const [form, setForm] = useState({
    from: '',
    message: '',
    presence: ' '
  })

  const [loader, setLoader] = useState(false)
  const [errorFormHandle, setErrorFormHandle] = useState(false)
  const [errorRequest, setErrorRequest] = useState(false)

  // handle get value form
  const handleForm = (e, type) => {
    if (type === 'from') setForm({ ...form, from: e.target.value })
    if (type === 'message') setForm({ ...form, message: e.target.value })
    if (type === 'presence') setForm({ ...form, presence: e.target.value })
  }

  // handle submit rsvp
  const handleSubmit = async () => {
    try {
      if (form.from === '' || form.message === '') {
        return setErrorFormHandle(true)
      }

      if (!errorFormHandle) {
        setLoader(true)
        const url = 'https://whatsapp.storylinesmile.tech/api/rsvp';
        const result = await axios.post(url, form);
        // console.log('result', result)

        // navigate(0)
      }
    } catch (error) {
      setErrorRequest(true)
      setForm({
        from: '',
        message: '',
        presence: ''
      })
    } finally {
      setForm({
        from: '',
        message: '',
        presence: ''
      })
      setLoader(false)
    }
  }

  // Close error handling
  useEffect(() => {
    if (errorFormHandle) {
      setTimeout(() => {
        setErrorFormHandle(false)
      }, 2000)
    }

    if (errorRequest) {
      setTimeout(() => {
        setErrorRequest(false)
      }, 2000)
    }

  }, [errorFormHandle, errorRequest])

  return (
    <div className="relative flex flex-col font-madeCanvas text-base" id="rsvp">
      {loader && (
        <div className="absolute left-0 right-0 z-10">
          <div className="p-12 m-12 absolute translate-x-1/2">
            <LoaderRing />
          </div>
        </div>
      )
      }

      {errorFormHandle && (
        <div className="absolute left-0 right-0 z-10">
          <div className="p-12 m-12 absolute translate-x-1/2">
            <ErrorMessage message="Harap mengisi nama dan ucapan" />
          </div>
        </div>
      )
      }

      {errorRequest && (
        <div className="absolute left-0 right-0 z-10">
          <div className="p-12 m-12 absolute translate-x-1/2">
            < ErrorMessage message="Gagal membuat RSVP!" />
          </div>
        </div>
      )
      }

      <div data-aos="zoom-in"
        data-aos-offset="10"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <form className="flex flex-col w-10/12 mx-auto">
          <label htmlFor="kepada" className="mb-1">Nama:</label>
          <input onChange={(e) => handleForm(e, 'from')} value={form.from} className="mb-3 border-none focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#AFABAB] rounded-full px-3 font-semibold"
            id="kepada" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
          />
          <label htmlFor="ucapan" className="mb-1">Ucapan:</label>
          <textarea onChange={(e) => handleForm(e, 'message')} value={form.message} className="mb-3 border-none h-24 focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#AFABAB] rounded-xl px-3 font-semibold"
            id="ucapan" cols="50" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
          />
          <label htmlFor="kehadiran" className="mb-1">Kehadiran:</label>

          {/* dropdown */}

          <div class="flex items-center mb-4 bg-[#D9D9D9] p-3 rounded-xl">
            <input onChange={(e) => handleForm(e, 'presence')}
              id="default-checkbox" type="checkbox" value="hadir" class="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Hadir
            </label>
          </div>

          {/* dropdown */}


          {/* <input className="focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#EBEDE0] rounded-full px-3 font-semibold"
              id="kehadiran" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
          /> */}
        </form>
        <div className="w-10/12 mx-auto py-3">
          <button onClick={handleSubmit} className="block bg-[#AFABAB] px-6 py-1 rounded-full text-white">
            Kirim
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormRsvp;
