import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Subtitle from "../components/Subtitle"
import InvestmentIntroComponent from "../components/InvestmentIntroComponent"
import InvestmentComponent from "../components/investmentComponentFolder/InvestmentComponent"

const IndividualTeamPage = ({ data: { investment } }) => {
  return (
    <Layout>
      <div className="bg-primary">
        <div className="pt-16 md:pt-24 xl:pt-40 width-wrapper">
          <InvestmentIntroComponent
            positionInTheCompany={investment.mergeExitTitle}
            investmentParagraph={investment.investmentParagraph}
            investmentName={investment.investmentName}
            investmentLogo={investment.investmentLogo.fluid}
            investmentWebsiteLink={investment.investmentWebsiteLink}
            announcements={
              investment.childContentfulIndividualInvestmentAnnouncementsRichTextNode
            }
            aboutTheInvestment={
              investment.childContentfulIndividualInvestmentAboutTheInvestmentRichTextNode
            }
          />
        </div>
        <div className="pt-20 px-6 md:px-10 xl:pt-40">
          <Subtitle subtitle="More investments of csp" />
          <InvestmentComponent idOfTheInvestment={investment.id} />
        </div>
      </div>
    </Layout>
  )
}

export default IndividualTeamPage
export const query = graphql`
  query($slug: String!) {
    investment: contentfulIndividualInvestment(slug: { eq: $slug }) {
      investmentName
      investmentParagraph {
        investmentParagraph
      }
      childContentfulIndividualInvestmentAboutTheInvestmentRichTextNode {
        json
      }
      childContentfulIndividualInvestmentAnnouncementsRichTextNode {
        json
      }
      investmentLogo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      id
      mergeExitTitle
      investmentWebsiteLink
    }
  }
`
