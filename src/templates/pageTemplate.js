import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/pageHeading"

export default function Template({ data }) {
  const { markdownRemark } = data

  if (!markdownRemark) {
    return null
  }

  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PageHeading heading={frontmatter.title} />
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
