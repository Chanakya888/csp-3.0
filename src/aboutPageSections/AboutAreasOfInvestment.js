import React, { useEffect } from "react"
import Subtitle from "../components/Subtitle"
import InvestmentComponent from "../components/investmentComponentFolder/InvestmentComponent"
import FactsAndFiguresComponent from "../components/factsAndFiguresFolder/FactsAndFiguresComponent"
import WhoWeAreSection from "../homepage-sections/WhoWeAreSection"
import TeamAtCspSection from "../homepage-sections/TeamAtCspSection"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { gsap, Power4 } from "gsap"
import { SplitText } from "../utils/SplitText.js"

const AboutAreasOfInvestment = () => {
  const aboutData = useStaticQuery(graphql`
    query {
      allContentfulAboutPage {
        nodes {
          areasOfInvestmentDesccription {
            areasOfInvestmentDesccription
          }
          aboutImage4 {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  // ANimations start
  const duration = 1.5
  useEffect(() => {
    gsap.to("#investment-overlay-1", {
      scrollTrigger: {
        trigger: "#investment-overlay-1",
        start: "top center",
      },
      height: "0px",
      duration: duration,
      ease: "expo.out",
    })
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#area-of-investment-text",
        start: "top 90%",
      },
    })
    let split = new SplitText("#area-of-investment-text", {
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
    t2.staggerFrom(
      document.querySelectorAll(".line_innerDiv"),
      1.5,
      { y: "100%", ease: Power4.easeOut },
      0.15
    )
  })

  return (
    <div className="">
      <div className="xl:flex xl:items-end">
        <div className="pr-6 pt-6  flex justify-start">
          <div className="relative">
            <Img
              fluid={
                aboutData.allContentfulAboutPage.nodes[0].aboutImage4.fluid
              }
              alt="Beautiful Skyscraper again"
              imgStyle={{ objectFit: "cover" }}
              className="homepage-image"
            />
            <div className="overlay-rectangle" id="investment-overlay-1"></div>
          </div>
        </div>
        <div className="px-6 pt-20">
          <div>
            <Subtitle subtitle="areas of investment" />
          </div>
          <div
            className="text-4xl leading-h2LineHeight xl:w-full"
            id="area-of-investment-text"
          >
            {
              aboutData.allContentfulAboutPage.nodes[0]
                .areasOfInvestmentDesccription.areasOfInvestmentDesccription
            }
          </div>
        </div>
      </div>
      <div className="px-6 xl:pt-40">
        <div className="pt-16">
          <InvestmentComponent />
        </div>
        <div className="pt-20 xl:pt-42">
          <div className="xl:pl-42">
            <Subtitle subtitle="awards and achievements" />
          </div>
          <FactsAndFiguresComponent />
        </div>
      </div>
      <div>
        <WhoWeAreSection hideButtons="hide" />
        <div className="">
          <TeamAtCspSection />
        </div>
      </div>
    </div>
  )
}

export default AboutAreasOfInvestment
