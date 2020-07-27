import React from "react"

const IndividualFactAndFigureComponent = props => {
  return (
    <div id={props.id} className="w-full flex-shrink-0 md:w-1/2 xl:w-2/6">
      <div
        className="pt-16 pl-6 bg-white relative md:w-11/12 xl:w-11/12"
        style={{ height: "330px" }}
      >
        <div className="absolute top-0 left-0 pt-12 pl-8 md:pl-8">
          <p className="subtitle-text investment-customer-text">{props.date}</p>
          <h1
            className="text-5xl md:text-6xl pt-4"
            style={{ color: "#00276F" }}
          >
            {props.amount}
          </h1>
          <div className="">
            <p className="pt-6 pb-10 w-64 xl:w-64 overflow-hidden">
              {props.fafDes}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4 w-auto xl:hidden">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <h2 className="text-2xl">{props.presentId}</h2>
            <h2
              className="text-2xl pl-1"
              style={{ color: "#B2B2C1" }}
            >{`/0${props.endId}`}</h2>
          </div>
          <div className="flex justify-end md:hidden">
            <button
              id="previous"
              onClick={() => {
                props.handlePrevious()
              }}
            >
              <div className="flex items-center">
                <div id="previous-left-arrow"></div>
                <h2 className="text-2xl">Previous</h2>
              </div>
            </button>
            <button
              id="next"
              onClick={() => {
                props.handleNext()
              }}
            >
              <div className="flex items-center">
                <h2 className="text-2xl pl-6">Next</h2>
                <div id="next-right-arrow"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualFactAndFigureComponent
