import React from "react";
import './styles.css'

const LoaderRing = () => {
  return (
    <div className="bg-black/50 absolute top-10 px-8 py-8 rounded-md mx-auto z-20 flex justify-center items-center">
      <div className="spinner-6" />
    </div>
  )
}


export default LoaderRing;
