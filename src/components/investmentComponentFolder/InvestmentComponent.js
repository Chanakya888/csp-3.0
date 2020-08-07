import React, { useState, useEffect } from "react"
import IndividualInvestmentComponent from "./IndividualInvestmentComponent"
import PreviousNextButtonComponent from "../PreviousNextButtonComponent"
import { graphql, useStaticQuery } from "gatsby"
import { gsap } from "gsap"
const InvestmentComponent = props => {
  const [x, setX] = useState(2)
  //   Individual investment component accepts the following:
  // DON'T CHANGE STATE value or setValue WITHOUT CHECKING
  //   customer: customer title
  //   company: company name
  //   companyDes: littlle description about the company
  //   presentId: number of each case study
  //   endId: total number of case
  //   img: image or logo of the company
  //   buttonText: text inside the button
  const data1 = useStaticQuery(graphql`
    query {
      allContentfulIndividualInvestment(
        sort: { fields: displayQueue, order: ASC }
      ) {
        nodes {
          investmentName
          investmentParagraph {
            investmentParagraph
          }
          investmentLogo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          id
          slug
          mergeExitTitle
          investmentWebsiteLink
        }
      }
    }
  `)

  let dataUnfiltered = data1.allContentfulIndividualInvestment.nodes
  const data = dataUnfiltered.filter(el => {
    return el.id !== props.idOfTheInvestment
  })

  let value = 0
  const handlePrevious = () => {
    if (value > 0) {
      value = value - 1
      moveSlider(value)
    }
  }
  const handleNext = () => {
    if (value < data.length - 1) {
      value = value + 1
      moveSlider(value)
    }
  }
  //x variable makes sure that handle functions work properly in both ipad and desktop without the need for another function
  useEffect(() => {
    if (window.screen.width > 1024) {
      setX(3)
    }
  }, [x])

  let numberOfExtras = data.length % x
  const handleNextInDesktop = () => {
    if (x === 3) {
      if (Math.ceil(value) < Math.ceil(data.length / x - 1)) {
        value = value + 1
        if (numberOfExtras === 1) {
          if (value === Math.ceil(data.length / x - 1)) {
            value = value - 0.67
          }
        }
        if (numberOfExtras === 2) {
          if (value === Math.ceil(data.length / x - 1)) {
            value = value - 0.35
          }
        }
      }
    } else {
      if (Math.ceil(value) < Math.ceil(data.length / x - 1)) {
        value = value + 1
        if (numberOfExtras === 1) {
          if (value === Math.ceil(data.length / x - 1)) {
            value = value - 0.5
          }
        }
      }
    }
    moveSlider(value)
  }

  const handlePreviousInDesktop = () => {
    if (value > 0) {
      if (x === 3) {
        if (x === 3 && numberOfExtras === 1) {
          if (Math.ceil(value) === Math.ceil(data.length / x - 1)) {
            value = value - 0.33
            value = value + 1
          }
        }
        if (x === 3 && numberOfExtras === 2) {
          if (Math.ceil(value) === Math.ceil(data.length / x - 1)) {
            value = value - 0.65
            value = value + 1
          }
        }
        value = value - 1
      } else {
        value = value - 1
        if (Math.ceil(value) === Math.ceil(data.length / x - 2)) {
          value = value - 0.5
          value = value + 1
        }
      }
      moveSlider(value)
    }
  }

  const moveSlider = moveby => {
    const slider = document.getElementById("slider")

    gsap.to(slider, 0.25, { x: `-${moveby * 100}%` })
  }

  let zeroOrNo = "0"
  if (data.length >= 10) {
    zeroOrNo = ""
  }

  return (
    <div id="investmentComponent">
      <div className="overflow-hidden">
        <div className="flex justify-start flex-shrink-0" id="slider">
          {data.map((idata, index) => {
            return (
              <IndividualInvestmentComponent
                presentId={`${zeroOrNo}` + (index + 1)}
                customer={idata.mergeExitTitle}
                company={idata.investmentName}
                buttonText={"Browse All"}
                companyDes={idata.investmentParagraph.investmentParagraph}
                endId={data.length}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                key={index}
                slug={idata.slug}
                logoImage={idata.investmentLogo.fluid}
                type={"investment"}
              />
            )
          })}
        </div>
        <PreviousNextButtonComponent
          handleNext={handleNextInDesktop}
          handlePrevious={handlePreviousInDesktop}
        />
      </div>
    </div>
  )
}

export default InvestmentComponent
