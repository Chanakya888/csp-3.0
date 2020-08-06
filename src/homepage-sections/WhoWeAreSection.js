import React from "react"
import Subtitle from "../components/Subtitle"
import DefaultButton from "../components/DefaultButton"
import { graphql, useStaticQuery, Link } from "gatsby"
import { gsap, Power4 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "../../node_modules/gsap/SplitText.js"

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)
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
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#who-we-are-text",
      start: "top 90%",
    },
  })
  let mySplitText = new SplitText("#who-we-are-text", { type: "lines" })
  let lines = mySplitText.lines
  t1.staggerFrom(lines, 1, { opacity: 0, y: 20, ease: Power4.easeOut }, 0.15)
  return (
    <div className="px-6 pt-24 md:px-10 xl:px-48 xl:pt-48">
      <Subtitle subtitle="who we are" />
      <p className="md:w-8/12 space-x-1 xl:w-1/2" id="who-we-are-text">
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
