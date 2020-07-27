import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../css/global.css"
import "../css/tailwind.css"
import Layout from "../components/layout/Layout"
import AboutSection from "../homepage-sections/Aboutsection"
import WhoWeAreSection from "../homepage-sections/WhoWeAreSection"
import InvestmentSection from "../homepage-sections/InvestmentSection"
import FactsAndFiguresSection from "../homepage-sections/FactsAndFiguresSection"
import TeamAtCspSection from "../homepage-sections/TeamAtCspSection"
import GetInTouchCard from "../components/GetInTouchCard"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePageMainDescriptionTextNode {
        mainDescription
      }
    }
  `)
  return (
    <Layout>
      <div className="bg-primary">
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
              <GetInTouchCard />
            </div>
            {/* Another div because of the change in left and right margins */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
