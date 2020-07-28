import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import IndividualInvestmentComponent from "../components/investmentComponentFolder/IndividualInvestmentComponent"
import Layout from "../components/layout/Layout"

const Team = () => {
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
  const teamData = teamDataQuery.allContentfulIndividualTeamMember.nodes
  return (
    <div className="bg-primary">
      <Layout>
        <div className="top-padding-for-each-page width-wrapper">
          <h1 className="text-6xl  leading-h1LineHeight pt-16 capitalize xl:text-7xl xl:leading-7xl">
            Team at CSP
          </h1>
          <p className="pt-16 paragraph-width-container md:w-8/12">
            We are a private equity investment firm investing across
            telecommunications, media & technology, healthcare, consumer and
            business services sectors with footprints across south east Asia and
            India.
          </p>
        </div>
        <div className="top-padding-for-each-page px-6 ">
          <div className="team-grid-container">
            {teamData.map((iteam1, index) => {
              return (
                <IndividualInvestmentComponent
                  customer={iteam1.positionInTheCompany}
                  company={iteam1.nameOfTheEmployee}
                  key={index}
                  fact="hide"
                  logoImage={iteam1.pictureOfTheEmployee.fluid}
                  makeWidthFull={"make-width-full"}
                  disableCount={"disable-count"}
                  slug={iteam1.slug}
                />
              )
            })}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Team
