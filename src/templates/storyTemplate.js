import React from "react"

import { globalHistory } from "@reach/router"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const href = globalHistory.location.href

  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <div className="flex">
        <div className="w-1/5"></div>

        <div className="w-4/5 max-w-2xl">
          <p className="text-sm uppercase text-dusk-blue mb-0 tracking-widest mb-4">
            {frontmatter.categories.join("|")}
          </p>
          <h1 className="font-serif text-375 mb-16 leading-none font-semibold">
            {frontmatter.title}
          </h1>
        </div>
      </div>

      <div className="flex items-start">
        <div className="w-1/5 sticky top-2">
          <p className="font-serif uppercase text-2xl">Share this</p>
          <div className="flex justify-between max-w-8125">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${href}`}>
              <img src="/assets/facebook.svg" alt="" role="presentation" />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}`}
            >
              <img src="/assets/linkedin.svg" alt="" role="presentation" />
            </a>
            <a href={`https://twitter.com/share?url=${href}`}>
              <img src="/assets/twitter.svg" alt="" role="presentation" />
            </a>
          </div>
        </div>

        <div className="w-4/5 max-w-2xl">
          <figure className="mb-20 text-xs text-slate-grey">
            <img
              src={frontmatter.story_image.file}
              alt={frontmatter.story_image.alt}
              className="mb-4"
            />
            {(frontmatter.story_image.caption ||
              frontmatter.story_image.credit) && (
              <div>
                {frontmatter.story_image.caption && (
                  <figcaption>{frontmatter.story_image.caption}</figcaption>
                )}
                {frontmatter.story_image.credit && (
                  <p className="italic">{frontmatter.story_image.credit}</p>
                )}
                <div className="w-40 h-1 bg-michigan-blue"></div>
              </div>
            )}
          </figure>

          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="content text-lg mb-8 drop-cap"
          />

          <div className="text-almost-black border-t border-b lg:flex justify-between py-2 text-sm mb-8">
            <div>By {frontmatter.author}</div>
            <time dateTime={frontmatter.plainDate}>{frontmatter.date}</time>
          </div>
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
        story_image {
          file
          alt
          caption
          credit
        }
        project_partners
      }
    }
  }
`
