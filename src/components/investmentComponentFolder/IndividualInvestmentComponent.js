import React, { useEffect } from "react"
import DefaultButton from "../DefaultButton"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { gsap, Power4 } from "gsap"
import { SplitText } from "../../utils/SplitText"

const IndividualInvestmentComponent = props => {
  //All the below value change is for the team page using this component
  let hideDes,
    disableCount,
    paddingInTeamComponent = "12",
    paddingLeftInTeamComponent = "0",
    paddingTopInTeamComponent = "10",
    PaddingRightForComponentOrPage = "6",
    widthOfComponent = "md:w-1/2 xl:w-2/6"
  if (props.fact === "hide") {
    hideDes = "hidden"
  }
  if (props.disableCount === "disable-count") {
    disableCount = "hidden"
    paddingInTeamComponent = "0"
    paddingLeftInTeamComponent = "0"
    widthOfComponent = ""
    paddingTopInTeamComponent = "0"
  }
  if (props.InvestmentsPage === "true") {
    PaddingRightForComponentOrPage = "0"
  }

  let zeroOrNot = "0"
  if (props.endId > 9) {
    zeroOrNot = ""
  }
  let hideInNonAnimatedPaged = "hidden"
  if (props.AnimateComponents === "true") {
    hideInNonAnimatedPaged = "block"
  }
  // Animations start
  let delay = 0
  if (props.delay === "delay-them") {
    delay = 1.25
  }

  useEffect(() => {
    if (props.AnimateComponents === "true") {
      let split = new SplitText(`#${props.type}-heading`, {
        type: "lines",
        linesClass: "line",
      })
      split.lines.forEach(element => {
        const line_innerDiv = document.createElement("h1")
        line_innerDiv.classList.add(`${props.type}-line_innerDiv`)
        line_innerDiv.textContent = element.textContent
        element.textContent = ""
        element.appendChild(line_innerDiv)
      })
      let aboutSplitText = new SplitText(`#${props.type}-subtitle`, {
        type: "lines",
      })
      let aboutLines = aboutSplitText.lines
      let splitTextDes = new SplitText(`#${props.type}-des`, {
        type: "lines",
      })
      let linesDes = splitTextDes.lines
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: `#${props.type}-heading`,
          start: "top 96%",
        },
      })
      //making the title visible
      t1.from(document.querySelectorAll(`.${props.type}-line_innerDiv`), 1, {
        opacity: 0,
        ease: Power4.easeOut,
      })
      // bringing up the title
      t1.staggerFrom(
        document.querySelectorAll(`.${props.type}-line_innerDiv`),
        1,
        { y: "100%", ease: Power4.easeOut },
        0.15
      )
      //bringing up about lines
      t1.from(
        aboutLines,
        0.75,
        { opacity: 0, y: 20, ease: Power4.easeOut },
        "-=2"
      )
      //removing overlay
      t1.to(
        `#${props.type}-overlay`,
        {
          height: 0,
          duration: 1,
          ease: Power4.easeOut,
        },
        "-=1"
      )
      t1.from(
        linesDes,
        0.75,
        { opacity: 0, y: 20, ease: Power4.easeOut },
        "-=2"
      )
      // t1.to(".external-link", 1, {
      //   drawSVG: 0,
      //   delay: 0.5,
      // })
    }
  })

  return (
    <div
      id={`${props.type}`}
      className={`w-full flex-shrink-0 ${widthOfComponent} md:pr-${PaddingRightForComponentOrPage}`}
    >
      <p
        className="subtitle-text investment-customer-text"
        id={`${props.type}-subtitle`}
      >
        {props.customer}
      </p>
      <div className="flex justify-between w-11/12 md:w-full xl:w-11/12">
        <h2 className="text-4xl pt-4" id={`${props.type}-heading`}>
          {props.company}
        </h2>
        <div className="flex items-center pt-3 pr-2">
          <Link to={`/${props.slug}`}>
            <div className="external-link"></div>
          </Link>
        </div>
      </div>

      <div
        className={`height-of-des-div pt-6 w-11/12 md:w-full xl:w-11/12 ${hideDes}`}
        id={`${props.type}-des`}
      >
        <p>{props.companyDes}</p>
      </div>

      <div
        className={`pt-${paddingInTeamComponent} md:pt-${paddingTopInTeamComponent} pl-${paddingLeftInTeamComponent} xl:pl-0 `}
      >
        <div className={`flex justify-between ${disableCount}`}>
          <div className="flex justify-start">
            <h2 className="text-2xl">{props.presentId}</h2>
            <h2
              className="text-2xl pl-1"
              style={{ color: "#B2B2C1" }}
            >{`/${zeroOrNot}${props.endId}`}</h2>
          </div>
          <div className="flex justify-end inline-block md:hidden">
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
        <div className="mt-5 xl:mt-8 xl:mr-6 relative">
          <Img
            id="investmentImage"
            className="investment-image"
            fluid={props.logoImage}
          />
          <div
            className={`investment-rectangle ${hideInNonAnimatedPaged}`}
            id={`${props.type}-overlay`}
          ></div>
        </div>
        <div className={`flex justify-end pt-5 md:hidden ${disableCount}`}>
          <DefaultButton buttonText={`${props.buttonText}`} />
        </div>
      </div>
    </div>
  )
}

export default IndividualInvestmentComponent
