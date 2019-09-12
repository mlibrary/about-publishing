import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>{frontmatter.categories.join("|")}</div>
      <h1>{frontmatter.title}</h1>
      <img src={frontmatter.image.file} alt={frontmatter.image.alt} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>By {frontmatter.author}</div>
      <time datetime={frontmatter.plainDate}>{frontmatter.date}</time>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM D, YYYY")
        plainDate: date
        categories
        image {
          file
          alt
        }
      }
    }
  }
`
