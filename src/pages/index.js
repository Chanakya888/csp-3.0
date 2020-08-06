import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../css/tailwind.css"
import "../css/global.css"
import Layout from "../components/layout/Layout"
import AboutSection from "../homepage-sections/Aboutsection"
import WhoWeAreSection from "../homepage-sections/WhoWeAreSection"
import InvestmentSection from "../homepage-sections/InvestmentSection"
import FactsAndFiguresSection from "../homepage-sections/FactsAndFiguresSection"
import TeamAtCspSection from "../homepage-sections/TeamAtCspSection"
import GeneralQuestionSection from "../homepage-sections/GeneralQuestionSection"
import { gsap, TimelineLite, Power4 } from "gsap"
import { SplitText } from "../../node_modules/gsap/SplitText"

gsap.registerPlugin(SplitText)
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePageMainDescriptionTextNode {
        mainDescription
      }
    }
  `)

  useEffect(() => {
    let t1 = new TimelineLite()
    let split = new SplitText("#split-text-Heading", {
      type: "lines",
      linesClass: "line",
    })
    split.lines.forEach(element => {
      const line_innerDiv = document.createElement("h1")
      line_innerDiv.classList.add("line_innerDiv")
      line_innerDiv.textContent = element.textContent
      element.textContent = ""
      element.appendChild(line_innerDiv)
    })

    t1.staggerFrom(
      document.querySelectorAll(".line_innerDiv"),
      1.5,
      { y: "100%", ease: Power4.easeOut },
      0.15
    )
  })
  return (
    <div className="bg-primary">
      <Layout>
        <div className="" id="mainComponent">
          <div id="wrapper">
            <div className="top-padding-for-each-page ">
              <div
                className="text-6xl width-wrapper leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl hide-text-div"
                id="split-text-Heading"
              >
                {data.contentfulHomePageMainDescriptionTextNode.mainDescription}
              </div>

              <AboutSection />
              <WhoWeAreSection />
            </div>
            <div>
              <InvestmentSection />
              <FactsAndFiguresSection />
              <TeamAtCspSection />
              <GeneralQuestionSection />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
