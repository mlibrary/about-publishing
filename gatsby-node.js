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
      allMarkdownRemark(
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "story" } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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

  const pageQuery = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
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

  const featureQuery = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "feature" } } }) {
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

  if (pageQuery.errors) {
    reporter.panicOnBuild(`Error while running pages GraphQL query.`)
    return
  }

  if (featureQuery.errors) {
    reporter.panicOnBuild(`Error while running pages GraphQL query.`)
    return
  }

  // Create story list pages.
  const stories = storiesQuery.data.allMarkdownRemark.edges
  const storiesPerPage = 9
  const storyPages = Math.ceil(stories.length / storiesPerPage)

  Array.from({ length: storyPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/stories-of-impact` : `/stories-of-impact/${i + 1}`,
      component: path.resolve("./src/templates/storyList.js"),
      context: {
        limit: storiesPerPage,
        skip: i * storiesPerPage,
        storyPages,
        currentPage: i + 1,
      },
    })
  })

  // Story pages.
  storiesQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/storyTemplate.js`),
      context: {},
    })
  })

  // Regular pages.
  pageQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {},
    })
  })

  // Feature pages.
  featureQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/featureTemplate.js`),
      context: {},
    })
  })
}
