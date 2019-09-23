import React from "react"

import { globalHistory } from "@reach/router"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MarkdownContent from "../components/markdownContent"
import Card from "../components/card"
import Section from "../components/section"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const href = globalHistory.location.href

  // Get related stories.
  const featuredStories = data.stories.nodes.filter(story =>
    frontmatter.related_stories.includes(story.frontmatter.title)
  )

  const hero = frontmatter.hero.story_hero_image

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      {frontmatter.hero.story_hero_image && (
        <img
          className="w-full absolute left-0 max-h-38125 object-cover"
          src={frontmatter.hero.story_hero_image}
          alt=""
          role="presentation"
        />
      )}

      <div className={`flex relative z-5 ${hero ? "pt-48" : ""}`}>
        <div className="w-1/5"></div>

        <div className="w-4/5 max-w-2xl">
          <p
            className={`text-sm uppercase mb-0 tracking-widest mb-4 ${
              hero ? "text-michigan-maize" : "text-dusk-blue"
            }`}
          >
            {frontmatter.categories.join("|")}
          </p>
          <h1
            className={`font-serif text-375 mb-16 leading-none font-semibold ${
              hero ? "text-very-light-blue" : ""
            }`}
          >
            {frontmatter.title}
          </h1>
        </div>
      </div>
      <div className="flex items-start relative z-5">
        <div className={`w-1/5 sticky top-2 ${hero ? "pt-48" : ""}`}>
          <p className="font-serif uppercase text-2xl">Share this</p>
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
            className="markdown text-lg mb-8 drop-cap"
          />

          <div className="text-almost-black border-t border-b lg:flex justify-between py-2 text-sm mb-12">
            <div>By {frontmatter.author}</div>
            <time dateTime={frontmatter.plainDate}>{frontmatter.date}</time>
          </div>

          {(frontmatter.highlight_box.heading ||
            frontmatter.highlight_box.text) && (
            <div className="border-l-8 border-michigan-maize pt-4 pl-6 pb-1 mb-20">
              <h2 className="text-2xl font-semibold mb-4">
                {frontmatter.highlight_box.heading}
              </h2>
              <MarkdownContent
                content={frontmatter.highlight_box.text}
                className="markdown small-margin"
              />
            </div>
          )}
        </div>
      </div>
      {featuredStories.length > 0 && (
        <Section heading="Explore more stories:" className="mb-20">
          <div className="lg:flex">
            {featuredStories.map(story => {
              return (
                <Card
                  key={story.frontmatter.title}
                  title={story.frontmatter.title}
                  href={story.frontmatter.path}
                  image={story.frontmatter.story_image.file}
                  alt={story.frontmatter.story_image.alt}
                  subtitle={story.frontmatter.categories.join("|")}
                  className="md:w-1/2 lg:w-1/3 px-3 flex flex-col"
                >
                  {story.excerpt}
                </Card>
              )
            })}
          </div>
        </Section>
      )}
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
        hero {
          text
          story_hero_image
        }
        story_image {
          file
          alt
          caption
          credit
        }
        highlight_box {
          heading
          text
        }
        related_stories
      }
    }

    stories: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "story" } } }
    ) {
      nodes {
        frontmatter {
          title
          path
          story_image {
            alt
            file
          }
          categories
        }
        excerpt(pruneLength: 140, truncate: true)
      }
    }
  }
`
