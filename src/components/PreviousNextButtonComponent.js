import React from "react"

const PreviousNextButtonComponent = props => {
  return (
    <div className="hidden md:block md:pt-6 md:flex md:justify-center">
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
          <h2 className="text-2xl pl-8">Next</h2>
          <div id="next-right-arrow"></div>
        </div>
      </button>
    </div>
  )
}

export default PreviousNextButtonComponent
