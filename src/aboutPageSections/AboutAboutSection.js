import React, { useEffect } from "react"
import DefaultButton from "../components/DefaultButton"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { gsap, TimelineLite, Power4 } from "gsap"
import { SplitText } from "../utils/SplitText"

gsap.registerPlugin(SplitText)
const AboutaboutSection = () => {
  const aboutData = useStaticQuery(graphql`
    query {
      allContentfulAboutPage {
        nodes {
          aboutPageDescription {
            aboutPageDescription
          }
          aboutImage1 {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          aboutImage2 {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          aboutImage3 {
            fluid {
              ...GatsbyContentfulFluid
            }
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
  const duration = 1.5
  // Animations start
  useEffect(() => {
    let t1 = new TimelineLite()
    let split = new SplitText("#about-text-heading", {
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
    let aboutSplitText = new SplitText("#about-page-landing-split-text", {
      type: "lines",
    })
    let aboutLines = aboutSplitText.lines
    t1.staggerFrom(
      document.querySelectorAll(".line_innerDiv"),
      1.5,
      { y: "100%", ease: Power4.easeOut },
      0.15
    )
    t1.staggerFrom(
      aboutLines,
      1,
      { opacity: 0, y: 20, ease: Power4.easeOut },
      0.15,
      "-=1.5"
    )
    t1.to("#about-overlay-1", {
      height: "0px",
      duration: duration,
      ease: Power4.easeOut,
    })
    gsap.to("#about-overlay-2", {
      scrollTrigger: {
        trigger: "#about-overlay-2",
        start: "top center",
      },
      height: "0px",
      duration: duration,
      ease: Power4.easeOut,
    })
    gsap.to("#about-overlay-3", {
      scrollTrigger: {
        trigger: "#about-overlay-3",
        start: "top center",
      },
      height: "0px",
      duration: duration,
      ease: Power4.easeOut,
    })
  })

  return (
    <div className="top-padding-for-each-page">
      <div className="flex justify-between">
        <div className="width-wrapper">
          <div
            className="text-6xl leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl"
            id="about-text-heading"
          >
            About Us
          </div>
          <p
            className="pt-10 xl:pt-16 md:w-8/12 lg:w-1/2 xl:w-full"
            id="about-page-landing-split-text"
          >
            {
              aboutData.allContentfulAboutPage.nodes[0].aboutPageDescription
                .aboutPageDescription
            }
          </p>
          <div className="pt-16 md:flex justify-start">
            <div>
              <button>
                <DefaultButton buttonText="Get in touch" />
              </button>
            </div>
            <div className="pt-5 md:pt-0 md:pl-8">
              <button>
                <Link to="/investments">
                  <DefaultButton buttonText="areas we invest in" />
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-40 hidden xl:block">
          <div className="relative">
            <Img
              fluid={
                aboutData.allContentfulAboutPage.nodes[0].aboutImage1.fluid
              }
              alt="Beautiful Skyscraper again"
              imgStyle={{ objectFit: "cover" }}
              className="homepage-image"
            />
            <div className="overlay-rectangle" id="about-overlay-1"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-end pl-6  pt-20 xl:hidden">
          <Img
            fluid={aboutData.allContentfulAboutPage.nodes[0].aboutImage1.fluid}
            alt="Beautiful Skyscraper again"
            imgStyle={{ objectFit: "cover" }}
            className="homepage-image"
          />
        </div>
        <div className="pr-6 pt-6 ">
          <div className="relative">
            <Img
              fluid={
                aboutData.allContentfulAboutPage.nodes[0].aboutImage2.fluid
              }
              alt="Beautiful Skyscraper again"
              imgStyle={{ objectFit: "cover" }}
              className="homepage-image"
            />
            <div className="overlay-rectangle" id="about-overlay-2"></div>
          </div>
        </div>
        <div className="flex justify-end pl-6 pt-6 ">
          <div className="relative">
            <Img
              fluid={
                aboutData.allContentfulAboutPage.nodes[0].aboutImage3.fluid
              }
              alt="Beautiful Skyscraper again"
              imgStyle={{ objectFit: "cover" }}
              className="homepage-image"
            />
            <div className="overlay-rectangle" id="about-overlay-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutaboutSection
