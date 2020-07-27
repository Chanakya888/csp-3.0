import React from "react"
import AboutAboutSection from "../aboutPageSections/AboutAboutSection"
import AboutAreasOfInvestment from "../aboutPageSections/AboutAreasOfInvestment"
import GeneralQuestionSection from "../homepage-sections/GeneralQuestionSection"
import Layout from "../components/layout/Layout"
const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-primary">
        <AboutAboutSection />
        <AboutAreasOfInvestment />
        <div>
          <GeneralQuestionSection />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
