import React, { useEffect } from "react"

const QuestionComponent = props => {
  const handleClick = () => {
    var accordion = document.getElementById(`accordion${props.id}`)
    var accordionContent = accordion.nextElementSibling
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null
      accordionContent.style.paddingTop = "0px"
      accordionContent.style.paddingBottom = "0px"
    } else {
      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + 20 + "px"
      accordionContent.style.paddingTop = "10px"
      accordionContent.style.paddingBottom = "10px"
    }
  }
  useEffect(() => {
    // console.log(accordion.nextElementSibling)
  })
  return (
    <div className="lg:w-4/6 xl:w-5/6">
      <div className="pt-4">
        <button
          id={`accordion${props.id}`}
          className="text-left"
          onClick={() => {
            handleClick()
          }}
        >
          <p className="accordion text-lg opacity-100">{props.question}</p>
        </button>
        <p className="accordionContent opacity-25 ">{props.answer}</p>
        <div className="w-full h-px bg-black mt-4"></div>
      </div>
    </div>
  )
}

export default QuestionComponent
