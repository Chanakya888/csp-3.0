import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/Layout"
import IndividualInvestmentComponent from "../components/investmentComponentFolder/IndividualInvestmentComponent"
const Investments = () => {
  const dataQuery = useStaticQuery(graphql`
    query {
      allContentfulIndividualInvestment(
        sort: { fields: displayQueue, order: ASC }
      ) {
        nodes {
          investmentName
          investmentLogo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          id
          mergeExitTitle
          investmentWebsiteLink
          slug
        }
      }
    }
  `)
  const investmentData = dataQuery.allContentfulIndividualInvestment.nodes
  return (
    <Layout>
      <div className="bg-primary">
        <div className="top-padding-for-each-page width-wrapper">
          <h1 className="text-6xl  leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl">
            Investments of CSP
          </h1>
          <p className="pt-16 paragraph-width-container md:w-8/12">
            We are a private equity investment firm investing across
            telecommunications, media & technology, healthcare, consumer and
            business services sectors with footprints across south east Asia and
            India.
          </p>
        </div>
        <div className="top-padding-for-each-page px-6">
          <div className="team-grid-container">
            {investmentData.map((idata, index) => {
              return (
                <IndividualInvestmentComponent
                  customer={idata.mergeExitTitle}
                  company={idata.investmentName}
                  key={index}
                  slug={idata.slug}
                  logoImage={idata.investmentLogo.fluid}
                  makeWidthFull={"make-width-full"}
                  disableCount={"disable-count"}
                  InvestmentsPage={"true"}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Investments
