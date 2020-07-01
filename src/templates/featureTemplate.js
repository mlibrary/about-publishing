import React from "react"
import showdown from "showdown"

import { graphql } from "gatsby"
import { globalHistory } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function FeatureTemplate({ data }) {
  const converter = new showdown.Converter()

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const hero = frontmatter.hero.feature_hero_image
  const href = globalHistory.location.href

  return (
    <Layout>
      <SEO title={frontmatter.title} description={markdownRemark.excerpt} />

      <div
        className="full-width"
        style={{ background: `url(${hero}) no-repeat center/cover` }}
      >
        <div
          className={`container mx-auto px-4 lg:px-10 flex relative z-5 ${
            hero ? "pt-20 lg:pt-40" : ""
          }`}
        >
          <div className="lg:w-1/5"></div>

          <div className="max-w-3xl mb-40 lg:w-4/5 md:mb-56">
            <p
              className={`text-sm uppercase mb-0 tracking-widest mb-4 ${
                hero ? "text-michigan-maize" : "text-dusk-blue"
              }`}
            >
              {frontmatter.subtitle}
            </p>
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-375 leading-105 font-semibold ${
                hero ? "text-very-light-blue" : ""
              }`}
            >
              {frontmatter.title}
            </h1>
            {frontmatter.hero.story_hero_image && frontmatter.hero.text && (
              <p className="mt-2 text-lg font-semibold text-white">
                {frontmatter.hero.text}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse items-start -mt-32 lg:flex-row z-5">
        <div
          className={`lg:w-1/5 lg:sticky top-9 mb-10 lg:mb-0 mx-auto lg:mx-0 ${
            hero ? "lg:pt-48" : ""
          }`}
        >
          <p className="font-serif text-2xl uppercase">Share this</p>
          <div className="flex justify-between max-w-8125">
            <a
              className="social-link"
              href={`https://www.facebook.com/sharer/sharer.php?u=${href}`}
            >
              <span className="clip">Share on Facebook</span>
            </a>
            <a
              className="social-link"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}`}
            >
              <span className="clip">Share on LinkedIn</span>
            </a>
            <a
              className="social-link"
              href={`https://twitter.com/share?url=${href}`}
            >
              <span className="clip">Share on Twitter</span>
            </a>
          </div>
        </div>

        <div className="max-w-2xl lg:w-4/5">
          <figure className="mb-20 text-xs text-slate-grey">
            <img
              src={frontmatter.feature_image.file}
              alt={frontmatter.feature_image.alt}
              className="w-full mb-4 rounded-lg animated fade-in-up max-h-24"
            />
          </figure>

          <div
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(html) }}
            className="mb-8 text-lg markdown drop-cap"
          />
        </div>
      </div>
    </Layout>
  )
}

export const featureQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        hero {
          text
          feature_hero_image
        }
        feature_image {
          file
          alt
        }
      }
    }
  }
`
