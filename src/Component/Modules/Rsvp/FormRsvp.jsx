import React, { useEffect, useState } from "react"
import axios from "axios"
import LoaderRing from "../../common/Loaders/Ring/index"
import ErrorMessage from './ErrorMessage'
import { useNavigate } from "react-router-dom"

const FormRsvp = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    from: '',
    message: '',
    presence: ''
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
      if (form.from === '' || form.message === '' || form.presence === '') {
        return setErrorFormHandle(true)
      }

      if (!errorFormHandle) {
        setLoader(true)
        const url = 'http://whatsapp.storylinesmile.tech/api/rsvp';
        const result = await axios.post(url, form);
        console.log('result', result)

        navigate(0)
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
    <div className="flex flex-col font-madeCanvas text-base" id="rsvp">
      {loader && <LoaderRing />}

      {errorFormHandle && <ErrorMessage message="Harap diisi semuanya" />}

      {errorRequest && <ErrorMessage message="Gagal membuat RSVP!" />}

      <div data-aos="zoom-in"
        data-aos-offset="10"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <form className="flex flex-col w-10/12 mx-auto">
          <label htmlFor="kepada">Kepada:</label>
          <input onChange={(e) => handleForm(e, 'from')} value={form.from} className="border-none focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#AFABAB] rounded-full px-3 font-semibold"
            id="kepada" type="text" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
          />
          <label htmlFor="ucapan">Ucapan:</label>
          <textarea onChange={(e) => handleForm(e, 'message')} value={form.message} className="border-none h-24 focus:outline-none focus:ring focus:ring-[#AFABAB] focus:text-[#858282] active:text-[#AFABAB] bg-[#D9D9D9] text-[#AFABAB] rounded-xl px-3 font-semibold"
            id="ucapan" cols="50" placeholder="&#x2022; &#x2022; &#x2022; &#x2022;"
          />
          <label htmlFor="kehadiran">Kehadiran:</label>

          {/* dropdown */}
          {/* <div className="flex justify-between">
            <label className="w-1/2 bg-slate-300">
              <input onChange={(e) => handleForm(e, 'presence')} type="radio" name="kehadiran" value="Hadir" checked={form.presence === 'Hadir'} />
              Hadir
            </label>
            <label>
              <input onChange={(e) => handleForm(e, 'presence')} type="radio" name="kehadiran" value="Tidak Hadir" checked={form.presence === 'Tidak Hadir'} />
              Tidak Hadir
            </label>
          </div> */}

          <div className="flex justify-between">
            <div class="flex items-center w-1/2 rounded border border-gray-200 dark:border-gray-700 mr-1">
              <div className="p-2">
                <input
                  onChange={(e) => handleForm(e, 'presence')} checked={form.presence === 'Hadir'}
                  id="bordered-radio-1" type="radio" value="Hadir" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-1" class="pl-1 py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Hadir</label>
              </div>
            </div>
            <div class="flex items-center w-1/2 rounded border border-gray-200 dark:border-gray-700">
              <div className="p-2">
                <input
                  onChange={(e) => handleForm(e, 'presence')} value="Tidak Hadir" checked={form.presence === 'Tidak Hadir'}
                  id="bordered-radio-1" type="radio" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-1" class="pl-1 py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Tidak Hadir</label>
              </div>
            </div>
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
