import React, { useEffect } from "react"
import Subtitle from "../components/Subtitle"
import DefaultButton from "../components/DefaultButton"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        nodes {
          image1 {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          image2 {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          image3 {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
      allContentfulHomePageAboutDescriptionTextNode {
        nodes {
          aboutDescription
        }
      }
      allContentfulHomePageMainSecondaryDescriptionTextNode {
        nodes {
          mainSecondaryDescription
        }
      }
    }
  `)
  // Animations start
  const duration = 1.5
  useEffect(() => {
    gsap.fromTo(
      "#overlay-1",
      { height: "500px" },
      {
        height: "0px",
        duration: duration,
        ease: "expo.out",
      }
    )
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#overlay-2",
        start: "top center",
      },
    })
    t1.to("#overlay-2", {
      height: "0px",
      duration: duration,
      ease: "expo.out",
    })
    // t1.to("#image-2", {
    //   scaleZ: 0.5,
    //   duration: duration,
    //   ease: "expo.out",
    // })
    gsap.to("#overlay-3", {
      scrollTrigger: {
        trigger: "#overlay-3",
        start: "top center",
      },
      height: "0px",
      duration: duration,
      ease: "expo.out",
    })
  })

  // Animations end
  return (
    <div className="pt-16 md:pt-24 xl:pt-24">
      <div className="flex justify-between">
        <div className="px-6 md:px-10 xl:pl-48 xl:pr-32">
          <Subtitle subtitle="about" animationName="about" />
          <p className="md:w-8/12 lg:w-1/2 xl:w-full">
            {
              data.allContentfulHomePageAboutDescriptionTextNode.nodes[0]
                .aboutDescription
            }
          </p>
          {/* buttons */}
          <div className="pt-16 w-auto inline-block md:flex md:justify-start">
            <div className="w-auto inline-block ">
              <button>
                <DefaultButton buttonText="get in touch" />
              </button>
            </div>
            <div className="pt-6 md:pt-0 md:pl-16 xl:pl-16">
              <button>
                {/* <Link to="/investments"> */}
                <DefaultButton buttonText="Browse Our Recent Investments" />
                {/* </Link> */}
              </button>
            </div>
          </div>
        </div>
        <div className="pt-40 hidden xl:block">
          {/* This image is for xl size */}
          <div className="relative">
            <Img
              fluid={data.allContentfulHomePage.nodes[0].image1.fluid}
              alt="Two Beautiful Skyscrapers"
              imgStyle={{ objectFit: "cover" }}
              className="homepage-image"
              id="image-1"
            />
            <div className="overlay-rectangle" id="overlay-1"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <div className="pl-6 pt-20 xl:w-1/2  xl:hidden">
          {/* This image is till lg size */}
          <Img
            fluid={data.allContentfulHomePage.nodes[0].image1.fluid}
            alt="Two Beautiful Skyscrapers"
            imgStyle={{ objectFit: "cover" }}
            className="homepage-image"
          />
        </div>
      </div>
      <div className="pr-6 pt-6 xl:w-1/2">
        <div className="relative" id="image-2">
          <div id="image-2">
            <Img
              fluid={data.allContentfulHomePage.nodes[0].image2.fluid}
              alt="Beautiful Skyscraper again"
              imgStyle={{ objectFit: "cover" }}
              className="homepage-image"
            />
          </div>
          <div className="overlay-rectangle" id="overlay-2"></div>
        </div>
      </div>

      <div className="pt-24 width-wrapper pr-8 xl:pt-40 xl:w-4/6 ">
        <h2 className="text-4xl">
          {
            data.allContentfulHomePageMainSecondaryDescriptionTextNode.nodes[0]
              .mainSecondaryDescription
          }
        </h2>
      </div>
      <div className="pl-6 pt-20 xl:w-1/2">
        <div className="relative">
          <Img
            fluid={data.allContentfulHomePage.nodes[0].image3.fluid}
            alt="Team of CSP"
            imgStyle={{ objectFit: "cover" }}
            className="homepage-image"
          />
          <div className="overlay-rectangle" id="overlay-3"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
