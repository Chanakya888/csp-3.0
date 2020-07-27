import React, { useEffect } from "react"
import DefaultButton from "../DefaultButton"
import Img from "gatsby-image"
import { Link } from "gatsby"
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
  useEffect(() => {})
  return (
    <div
      id={props.id}
      className={`w-full flex-shrink-0 ${widthOfComponent} md:pr-${PaddingRightForComponentOrPage}`}
    >
      <p className="subtitle-text investment-customer-text">{props.customer}</p>
      <div className="flex justify-between w-11/12 md:w-full xl:w-11/12">
        <h2 className="text-4xl pt-4">{props.company}</h2>
        <div className="flex items-center pt-3 pr-2">
          <Link to={`/${props.slug}`}>
            <div className="external-link"></div>
          </Link>
        </div>
      </div>
      <p className={`pt-6 w-11/12 md:w-full xl:w-11/12 ${hideDes}`}>
        {props.companyDes}
      </p>
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
        <div className="mt-5 xl:mt-8 xl:mr-6">
          <Img
            id="investmentImage"
            className="investment-image"
            fluid={props.logoImage}
          />
        </div>
        <div className={`flex justify-end pt-5 md:hidden ${disableCount}`}>
          <DefaultButton buttonText={`${props.buttonText}`} />
        </div>
      </div>
    </div>
  )
}

export default IndividualInvestmentComponent
