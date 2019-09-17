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

      <div className="flex">
        <div className="w-2/12"></div>

        <div className="w-10/12 max-w-2xl">
          <p className="text-sm uppercase text-dusk-blue mb-0">
            {frontmatter.categories.join("|")}
          </p>
          <h1 className="font-serif text-375 mb-16 leading-none">
            {frontmatter.title}
          </h1>
        </div>
      </div>

      <div className="flex items-start">
        <div className="w-2/12 sticky top-2">
          <p className="font-serif uppercase text-2xl">Share this</p>
          <div className="flex justify-between max-w-8125">
            <img src="/assets/facebook.svg" alt="facebook"/>
            <img src="/assets/linkedin.svg" alt="facebook"/>
            <img src="/assets/twitter.svg" alt="facebook"/>
          </div>
        </div>

        <div className="w-10/12 max-w-2xl">
          <img src={frontmatter.image.file} alt={frontmatter.image.alt} className="mb-16" />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div>By {frontmatter.author}</div>
          <time datetime={frontmatter.plainDate}>{frontmatter.date}</time>
        </div>
      </div>
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
