import React, { useEffect } from "react"
import { gsap, Power4 } from "gsap"

const DefaultButton = props => {
  var textColor = "black"
  let fullButton = ""
  let underline = "block"
  let widthOfUnderline = "100%"
  let landingButtonUnderline = ""
  if (props.landingButtonUnderline === "landingButtonUnderline") {
    landingButtonUnderline = "landingButtonUnderline"
    widthOfUnderline = "0"
  }
  if (props.color === "white") {
    textColor = "white"
  }
  if (props.fullButton === "show") {
    fullButton = "border-solid border-2 border-black px-4"
    underline = "hidden"
  }
  var button_text_withoutspaces = props.buttonText.split(" ").join("")
  // Animations start
  // const handleHover = (e) => {
  //   const underline = e.target.childNodes[0].parentElement.nextElementSibling;
  //   console.log("child", underline);
  //   TweenMax.fromTo(underline, { width: "0%" }, { width: "100%", duration: 0.4 });
  // };
  useEffect(() => {
    gsap.to(`#${button_text_withoutspaces}-Underline`, {
      scrollTrigger: {
        trigger: `#${button_text_withoutspaces}-Underline`,
        start: "20px 80%",
      },
      width: widthOfUnderline,
      duration: 1,
      ease: Power4.easeOut,
    })
  })
  // Animations end
  return (
    <div className="w-auto inline-block cursor-pointer">
      <p className={`button-text text-${textColor} ${fullButton}`}>
        {props.buttonText}
      </p>
      <div
        id={`${button_text_withoutspaces}-Underline`}
        className={` h-px w-px block bg-${textColor} ${underline} ${landingButtonUnderline}`}
      ></div>
    </div>
  )
}

export default DefaultButton
