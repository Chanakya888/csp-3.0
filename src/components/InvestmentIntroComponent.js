import React from "react"
import Img from "gatsby-image"
import Subtitle from "./Subtitle"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ListComponent from "./ListComponent"
const InvestmentIntroComponent = props => {
  const investmentParagraph = props.investmentParagraph.investmentParagraph
  const announcements = documentToReactComponents(props.announcements.json)
  const aboutTheInvestment = documentToReactComponents(
    props.aboutTheInvestment.json
  )
  console.log("props are", props)

  return (
    <div className="pt-20 xl:pt-0">
      <p className="subtitle-text investment-customer-text">
        {props.positionInTheCompany}
      </p>
      <h2 className="text-5xl pt-4">{props.investmentName}</h2>
      <div className="md:flex md:flex-row-reverse md:pt-4 overflow-hidden ">
        <div className="mt-5 xl:mt-8 xl:mr-6 md:w-1/2 lg:pl-8 xl:pl-16">
          <Img
            className="image-of-team-member"
            fluid={props.investmentLogo}
          ></Img>
          <div className="pt-24 hidden md:block announcements">
            <Subtitle subtitle="announcements" pb="null" />
            <ListComponent listArray={announcements} />
          </div>
        </div>

        <div className="md:pr-6 md:w-1/2">
          <div>
            <div className="pt-6 paragraph-width-container-for-templates">
              <p>{investmentParagraph}</p>
            </div>
          </div>
          <div className="pt-24">
            <Subtitle subtitle="About the investment" pb="null" />
            <div className="richtext pt-5">{aboutTheInvestment}</div>
          </div>
          <div className="pt-24 md:hidden">
            <Subtitle subtitle="announcements" pb="null" />
            <ListComponent listArray={announcements} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentIntroComponent
