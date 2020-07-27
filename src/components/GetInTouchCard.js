import React from "react"
import DefaultButton from "./DefaultButton"

const GetInTouchCard = () => {
  return (
    <div className="bg-secondary ">
      <div className="pt-12 pl-8 pb-12">
        <p className="subtitle-text get-in-touch-text">
          Lorem ipsum dolor sit?
        </p>
        <p className="pt-4 text-white w-10/12">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>
        <button className="pt-12">
          <DefaultButton buttonText="get in touch with us" color="white" />
        </button>
      </div>
    </div>
  )
}

export default GetInTouchCard
