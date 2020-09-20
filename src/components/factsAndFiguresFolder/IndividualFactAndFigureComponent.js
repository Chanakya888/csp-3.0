import React from "react"
import DefaultButton from "../DefaultButton"

const IndividualFactAndFigureComponent = props => {
  return (
    <div id={props.id} className="w-full flex-shrink-0 md:w-1/2 xl:w-2/6">
      <div
        className="pt-16 pl-6 bg-white relative md:w-11/12 xl:w-11/12"
        style={{ height: "330px" }}
      >
        <div className="absolute top-0 left-0 pt-12 pl-8 md:pl-8">
          <p className="subtitle-text investment-customer-text">{props.date}</p>
          <div className="">
            {/* {props.fafDes} */}
            <p
              className="pt-8 pr-8 overflow-hidden"
              style={{ height: "180px" }}
            >
              Text for this part is pending, This text includes a small intro of
              the source that links to the source. Text for this part is
              pending, This text includes a small intro of the source that links
            </p>
          </div>
          <div className="">
            <DefaultButton buttonText="View source" />
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
