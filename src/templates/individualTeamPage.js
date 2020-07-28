import React from "react"
import { graphql } from "gatsby"
import TeamMemberIntroComponent from "../components/TeamMemberIntroComponent"
import TeamAtCspComponent from "../components/TeamAtCspComponent"
import Subtitle from "../components/Subtitle"
import Layout from "../components/layout/Layout"
const IndividualTeamPage = ({ data: { teamMember } }) => {
  return (
    <div className="bg-primary">
      <Layout>
        <div className="pt-16 md:pt-24 xl:pt-40 width-wrapper">
          <TeamMemberIntroComponent
            positionInTheCompany={teamMember.positionInTheCompany}
            nameOfTheEmployee={teamMember.nameOfTheEmployee}
            aboutTheEmployee={teamMember.aboutTheEmployee}
            pictureOfTheEmployee={teamMember.pictureOfTheEmployee.fluid}
            experience={
              teamMember.childContentfulIndividualTeamMemberExperienceRichTextNode
            }
            education={
              teamMember.childContentfulIndividualTeamMemberEducationRichTextNode
            }
          />
        </div>
        <div className="pt-20 px-6 md:px-10 xl:pt-40">
          <Subtitle subtitle="More team members at csp" />
          <TeamAtCspComponent idOfTheEmployee={teamMember.id} />
        </div>
      </Layout>
    </div>
  )
}

export default IndividualTeamPage
export const query = graphql`
  query($slug: String!) {
    teamMember: contentfulIndividualTeamMember(slug: { eq: $slug }) {
      positionInTheCompany
      nameOfTheEmployee
      pictureOfTheEmployee {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      aboutTheEmployee {
        aboutTheEmployee
      }
      childContentfulIndividualTeamMemberExperienceRichTextNode {
        json
      }
      childContentfulIndividualTeamMemberEducationRichTextNode {
        json
      }
      id
    }
  }
`
