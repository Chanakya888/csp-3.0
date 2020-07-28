import React from "react"
import AboutAboutSection from "../aboutPageSections/AboutAboutSection"
import AboutAreasOfInvestment from "../aboutPageSections/AboutAreasOfInvestment"
import GeneralQuestionSection from "../homepage-sections/GeneralQuestionSection"
import Layout from "../components/layout/Layout"
const AboutPage = () => {
  return (
    <div className="bg-primary">
      <Layout>
        <AboutAboutSection />
        <AboutAreasOfInvestment />
        <div>
          <GeneralQuestionSection />
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
