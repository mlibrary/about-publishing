/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const storiesQuery = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "story" } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (storiesQuery.errors) {
    reporter.panicOnBuild(`Error while running stories GraphQL query.`)
    return
  }

  storiesQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/storyTemplate.js`),
      context: {},
    })
  })
}
