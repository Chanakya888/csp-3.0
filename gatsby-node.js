exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allContentfulIndividualTeamMember(
        sort: { fields: displayQueue, order: ASC }
      ) {
        nodes {
          slug
        }
      }
      allContentfulIndividualInvestment(
        sort: { fields: displayQueue, order: ASC }
      ) {
        nodes {
          slug
        }
      }
    }
  `)
  if (result.error) {
    reporter.panic("error loading data", JSON.stringify(result.errors))
  }
  result.data.allContentfulIndividualTeamMember.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.slug}`,
      component: require.resolve("./src/templates/individualTeamPage.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  result.data.allContentfulIndividualInvestment.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.slug}`,
      component: require.resolve("./src/templates/individualInvestmentPage.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
