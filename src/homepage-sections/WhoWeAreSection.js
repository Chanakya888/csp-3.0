import React from "react"
import Subtitle from "../components/Subtitle"
import DefaultButton from "../components/DefaultButton"
import { graphql, useStaticQuery, Link } from "gatsby"
const WhoWeAreSection = props => {
  let showWhoWeAreButtons = "inline-block"
  if (props.hideButtons === "hide") {
    showWhoWeAreButtons = "hidden"
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulWhoWeAreSectionWhoWeAreDescriptionTextNode {
        nodes {
          whoWeAreDescription
        }
      }
    }
  `)

  return (
    <div className="px-6 pt-24 md:px-10 xl:px-48 xl:pt-48">
      <Subtitle subtitle="who we are" />
      <p className="md:w-8/12 space-x-1 xl:w-1/2">
        {
          data.allContentfulWhoWeAreSectionWhoWeAreDescriptionTextNode.nodes[0]
            .whoWeAreDescription
        }
      </p>
      <div
        className={`pt-16 w-auto ${showWhoWeAreButtons} md:flex md:justify-start`}
      >
        <div className="w-auto inline-block ">
          <Link to="/team">
            <DefaultButton buttonText="Meet The Team" />
          </Link>
        </div>
        <div className="pt-6 md:pt-0 md:pl-12 xl:pl-20">
          <Link to="/about">
            <DefaultButton buttonText="Know More about us" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
