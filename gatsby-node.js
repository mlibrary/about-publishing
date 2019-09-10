/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)

//   const homepageQuery = await graphql(`
//     {
//       markdownRemark(frontmatter: { type: { eq: "homepage" } }) {
//         html
//         frontmatter {
//           hero_section {
//             heading
//           }
//         }
//       }
//     }
//   `)

//   if (homepageQuery.errors) {
//     reporter.panicOnBuild(`Error while running homepage GraphQL query.`)
//     return
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: pageTemplate,
//       context: {}, // additional data can be passed via context
//     })
//   })
// }
