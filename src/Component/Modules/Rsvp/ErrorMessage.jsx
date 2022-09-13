import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-black/50 absolute top-10 w-32 text-center text-sm py-5 rounded-md mx-auto z-20 flex justify-center items-center text-white">
      {message}
    </div>
  )
}

export default ErrorMessage;
