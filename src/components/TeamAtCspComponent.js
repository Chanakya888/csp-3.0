import React, { useState, useEffect } from "react"
import gsap from "gsap"
import IndividualInvestmentComponent from "./investmentComponentFolder/IndividualInvestmentComponent"
import PreviousNextButtonComponent from "./PreviousNextButtonComponent"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "./layout/Layout"
const TeamAtCspComponent = props => {
  const [value, setValue] = useState(0)
  const [x, setX] = useState(2)
  const teamDataQuery = useStaticQuery(graphql`
    query {
      allContentfulIndividualTeamMember(
        sort: { fields: displayQueue, order: ASC }
      ) {
        nodes {
          positionInTheCompany
          nameOfTheEmployee
          pictureOfTheEmployee {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          id
          slug
        }
      }
    }
  `)

  const teamDataUnfiltered =
    teamDataQuery.allContentfulIndividualTeamMember.nodes

  const teamData = teamDataUnfiltered.filter(el => {
    return el.id !== props.idOfTheEmployee
  })

  console.log("new array is", teamData)
  const handlePrevious = () => {
    if (value > 0) {
      setValue(value => value - 1)
    }
  }
  const handleNext = () => {
    if (value < teamData.length - 1) {
      setValue(value => value + 1)
    }
  }
  //x variable makes sure that handle functions work properly in both ipad and desktop without the need for another function
  useEffect(() => {
    if (window.screen.width > 1024) {
      setX(3)
    }
  }, [x])

  const handleNextInDesktop = () => {
    if (value < Math.ceil(teamData.length / x - 1)) {
      setValue(value => value + 1)
    }
  }
  useEffect(() => {
    const slider = document.getElementById("teamSlider")
    gsap.to(slider, 0.25, { x: `-${value * 100}%` })
  }, [value])

  const zeroOrNot = index => {
    if (index < 9) {
      return 0
    } else {
      return ""
    }
  }
  return (
    <div className="TeamAtCspComponent">
      <div className="overflow-hidden">
        <div className="flex justify-start flex-shrink-0" id="teamSlider">
          {teamData.map((iteam1, index) => {
            return (
              <IndividualInvestmentComponent
                presentId={`${zeroOrNot(index)}` + (index + 1)}
                customer={iteam1.positionInTheCompany}
                company={iteam1.nameOfTheEmployee}
                endId={teamData.length}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                key={index}
                slug={iteam1.slug}
                fact="hide"
                logoImage={iteam1.pictureOfTheEmployee.fluid}
              />
            )
          })}
        </div>
        <PreviousNextButtonComponent
          handleNext={handleNextInDesktop}
          handlePrevious={handlePrevious}
        />
      </div>
    </div>
  )
}

export default TeamAtCspComponent
