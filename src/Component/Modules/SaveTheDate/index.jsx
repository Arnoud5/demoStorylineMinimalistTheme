import React from "react";

// Assets
import TheDate1 from "./Assets/savethedate-1.png"
import TheDate2 from "./Assets/savethedate-2.png"
import Time from "./Assets/time.svg"
import Location from "./Assets/location.svg"

const SaveTheDate = () => {
    return (
        <div className="w-full h-fit bg-[#EBEDE0]"
            id="savethedate"
        >
            <div className="py-2 pb-8">
                <h2 className="text-3xl font-madeCanvas text-center"
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                >
                    SAVE <span className="font-creattionDemo">THE</span> DATE
                </h2>
                <div className="mt-5"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                >
                    <div className="relative">
                        <div className="w-full h-48"
                            style=
                            {{
                                backgroundImage: "url(" + TheDate1 + ")",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                        ></div>
                        <h3 className="save-date-text-shadow flex justify-center w-full absolute bottom-12 xxs:bottom-8 text-white text-2xl xxs:text-4xl tracking-widest font-madeCanvas">AKAD & RESEPSI</h3>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="font-creattionDemo text-3xl leading-loose">Tanggal</p>
                        <p className="font-magesta text-4xl">22.09.22</p>
                    </div>
                    <div className="flex justify-center font-madeCanvas">
                        <table>
                            <tbody>

                                <tr>
                                    <td className="align-middle">
                                        <img src={Time} className="block w-3 mx-auto" alt="time icon" />
                                    </td>
                                    <td>Akad Nikah</td>
                                    <td>: 09:00 WIB</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Resepsi</td>
                                    <td>: 10:00 WIB</td>
                                </tr>
                                <tr>
                                    <td><img src={Location} className="w-3 flex justify-center items-center" alt="location icon" /></td>
                                    <td colSpan="2">Desa Penggalang, Adipala, Cilacap</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center my-2">
                        <a className="
                            px-2 py-1 rounded-full bg-[#D9D9D9] font-madeCanvas text-base font-medium 
                            hover:bg-[#cac9c9] active:bg-[#D9D9D9] focus:outline-none focus:ring hover:ring 
                            focus:ring-[#D9D9D9] hover:ring-[#D9D9D9]"
                            target="_blank"
                            rel="noreferrer"
                            href="https://maps.app.goo.gl/9JXR8FuHzqQNCUGD6">
                            Lihat Peta
                        </a>
                    </div>
                </div>

                <div className="mt-5"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                >
                    <div className="relative">
                        <div className="w-full h-48"
                            style=
                            {{
                                backgroundImage: "url(" + TheDate2 + ")",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                        ></div>
                        <h3 className="save-date-text-shadow flex justify-center w-full absolute bottom-12 xxs:bottom-8 text-white text-2xl xxs:text-4xl tracking-wide font-madeCanvas">NGUNDUH MANTU</h3>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="font-creattionDemo text-3xl leading-loose">Tanggal</p>
                        <p className="font-magesta text-4xl">25.09.22</p>
                    </div>
                    <div className="flex justify-center font-madeCanvas">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="align-middle">
                                        <img src={Time} className="block w-3 mx-auto" alt="time icon" />
                                    </td>
                                    <td>Pukul 09:00 WIB - Selesai</td>
                                </tr>
                                <tr>
                                    <td><img src={Location} className="w-3 flex justify-center items-center" alt="location icon" /></td>
                                    <td>Desa Krikil, Pageruyung, Kendal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center my-2">
                        <a className="
                            px-2 py-1 rounded-full bg-[#D9D9D9] font-madeCanvas text-base font-medium 
                            hover:bg-[#cac9c9] active:bg-[#D9D9D9] focus:outline-none focus:ring hover:ring 
                            focus:ring-[#D9D9D9] hover:ring-[#D9D9D9]"
                            target="_blank"
                            rel="noreferrer"
                            href="https://maps.app.goo.gl/yArkf2BkwVGKtQnF6">
                            Lihat Peta
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SaveTheDate;