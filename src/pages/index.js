import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MarkdownContent from "../components/markdownContent";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "homepage" } }) {
        html
        frontmatter {
          hero_section {
            heading
            text
            image {
              alt
              file
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.markdownRemark.frontmatter.hero_section.heading}</h1>
      <MarkdownContent content={data.markdownRemark.frontmatter.hero_section.text} />
    </Layout>
  )
}

export default IndexPage
