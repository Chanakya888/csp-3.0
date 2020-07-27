import React, { useEffect } from "react"
import DefaultButton from "../components/DefaultButton"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { gsap } from "gsap"
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
    gsap.to("#about-overlay-1", {
      scrollTrigger: {
        trigger: "#about-overlay-1",
        start: "top center",
      },
      height: "0px",
      duration: duration,
      delay: 1,
      ease: "expo.out",
    })
    gsap.to("#about-overlay-2", {
      scrollTrigger: {
        trigger: "#about-overlay-2",
        start: "top center",
      },
      height: "0px",
      duration: duration,
      ease: "expo.out",
    })
    gsap.to("#about-overlay-3", {
      scrollTrigger: {
        trigger: "#about-overlay-3",
        start: "top center",
      },
      height: "0px",
      duration: duration,
      ease: "expo.out",
    })
  })

  return (
    <div className="top-padding-for-each-page">
      <div className="flex justify-between">
        <div className="px-6 width-wrapper">
          <h1 className="text-6xl leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl">
            About Us
          </h1>
          <p className="pt-10 xl:pt-16 md:w-8/12 lg:w-1/2 xl:w-full">
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
