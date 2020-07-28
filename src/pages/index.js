import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../css/tailwind.css"
import "../css/global.css"
import Layout from "../components/layout/Layout"
import AboutSection from "../homepage-sections/Aboutsection"
import WhoWeAreSection from "../homepage-sections/WhoWeAreSection"
import InvestmentSection from "../homepage-sections/InvestmentSection"
import FactsAndFiguresSection from "../homepage-sections/FactsAndFiguresSection"
import TeamAtCspSection from "../homepage-sections/TeamAtCspSection"
import GeneralQuestionSection from "../homepage-sections/GeneralQuestionSection"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePageMainDescriptionTextNode {
        mainDescription
      }
    }
  `)
  return (
    <div className="bg-primary">
      <Layout>
        <div className="" id="mainComponent">
          <div id="wrapper">
            <div className="top-padding-for-each-page">
              <h1 className="text-6xl width-wrapper leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl">
                {data.contentfulHomePageMainDescriptionTextNode.mainDescription}
              </h1>
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
