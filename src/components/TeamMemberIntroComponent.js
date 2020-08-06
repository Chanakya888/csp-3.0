import React from "react"
import ListComponent from "./ListComponent"
import Img from "gatsby-image"
import Subtitle from "./Subtitle"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
const TeamMemberIntroComponent = props => {
  const experience = documentToReactComponents(props.experience.json)
  const education = documentToReactComponents(props.education.json)
  console.log("props are education", props.education)
  return (
    <div className="pt-20 xl:pt-0">
      <p className="subtitle-text investment-customer-text">
        {props.positionInTheCompany}
      </p>
      <h2 className="text-5xl pt-4">{props.nameOfTheEmployee}</h2>
      <div className="md:flex md:flex-row-reverse md:pt-4 overflow-hidden">
        <div className="mt-5 xl:mt-8 xl:mr-6 md:w-1/2 lg:pl-8 xl:pl-16">
          <Img
            className="image-of-team-member"
            fluid={props.pictureOfTheEmployee}
          ></Img>
          <div className="pt-24 hidden md:block">
            <Subtitle subtitle="education" pb="null" />
            <ListComponent listArray={education} />
          </div>
        </div>
        <div className="md:pr-6 md:w-1/2">
          <div>
            <p className="pt-6 paragraph-width-container-for-templates">
              {props.aboutTheEmployee.aboutTheEmployee}
            </p>
          </div>
          <div className="pt-24">
            <Subtitle subtitle="experience" pb="null" />
            <ListComponent listArray={experience} />
          </div>
          <div className="pt-24 md:hidden">
            <Subtitle subtitle="education" pb="null" />
            <ListComponent listArray={education} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberIntroComponent
