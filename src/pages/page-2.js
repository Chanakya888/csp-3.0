import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/Layout"

const SecondPage = () => {
  const aboutData = useStaticQuery(graphql`
    query {
      allContentfulAboutPage {
        nodes {
          areasOfInvestmentDesccription {
            areasOfInvestmentDesccription
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>
        {
          aboutData.allContentfulAboutPage.nodes[0]
            .areasOfInvestmentDesccription.areasOfInvestmentDesccription
        }
      </h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
