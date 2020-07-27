import React, { useState, useEffect } from "react"
import IndividualFactAndFigureComponent from "./IndividualFactAndFigureComponent"
import gsap from "gsap"
import PreviousNextButtonComponent from "../PreviousNextButtonComponent"
import { graphql, useStaticQuery } from "gatsby"
const FactsAndFiguresComponent = () => {
  const [x, setX] = useState(2)
  // date: date of the InvestmentComponent formaat: Date(number) Month(word) year(number)
  // amount: amount invested
  // fafDes: description of the FactsAndFiguresComponent
  // presentId: id of the fact
  const factDataQuery = useStaticQuery(graphql`
    query {
      allContentfulIndividualFactsAndFigures {
        nodes {
          investmentDate
          investmentAmount
          investmentDescription {
            investmentDescription
          }
        }
      }
    }
  `)
  const factData = factDataQuery.allContentfulIndividualFactsAndFigures.nodes

  let value = 0
  const handlePrevious = () => {
    if (value > 0) {
      value = value - 1
      moveSlider(value)
    }
  }
  const handleNext = () => {
    if (value < factData.length - 1) {
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

  let numberOfExtras = factData.length % x
  const handleNextInDesktop = () => {
    if (x === 3) {
      if (Math.ceil(value) < Math.ceil(factData.length / x - 1)) {
        value = value + 1
        if (numberOfExtras === 1) {
          if (value === Math.ceil(factData.length / x - 1)) {
            console.log("value matched, last element detected for next")
            value = value - 0.67
          }
        }
        if (numberOfExtras === 2) {
          if (value === Math.ceil(factData.length / x - 1)) {
            console.log("value matched, last element detected for next")
            value = value - 0.35
          }
        }
      }
    } else {
      if (Math.ceil(value) < Math.ceil(factData.length / x - 1)) {
        value = value + 1
        if (value === Math.ceil(factData.length / x - 1)) {
          value = value - 0.5
        }
      }
    }
    moveSlider(value)
  }

  const handlePreviousInDesktop = () => {
    if (value > 0) {
      if (x === 3) {
        if (x === 3 && numberOfExtras === 1) {
          if (Math.ceil(value) === Math.ceil(factData.length / x - 1)) {
            console.log(
              "value matched, last element detected for previouss in no. extras 1"
            )
            value = value - 0.33
            value = value + 1
          }
        }
        if (x === 3 && numberOfExtras === 2) {
          if (Math.ceil(value) === Math.ceil(factData.length / x - 1)) {
            console.log(
              "value matched, last element detected for previouss in no. extras 2"
            )
            value = value - 0.65
            value = value + 1
          }
        }
        value = value - 1
        console.log("value of previous after making changess", value)
      } else {
        value = value - 1
        if (Math.ceil(value) === Math.ceil(factData.length / x - 2)) {
          console.log("last one detected")
          value = value - 0.5
          value = value + 1
        }
      }
      moveSlider(value)
    }
  }

  const moveSlider = moveby => {
    const slider = document.getElementById("factSlider")
    console.log("value is ", moveby * 100)
    gsap.to(slider, 0.25, { x: `-${moveby * 100}%` })
  }
  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex justify-start flex-shrink-0" id="factSlider">
          {factData.map((ifact1, index) => {
            return (
              <IndividualFactAndFigureComponent
                presentId={"0" + (index + 1)}
                date={ifact1.investmentDate}
                amount={ifact1.investmentAmount}
                fafDes={ifact1.investmentDescription.investmentDescription}
                endId={factData.length}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                key={index}
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

export default FactsAndFiguresComponent
