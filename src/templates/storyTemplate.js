import React from "react"
import showdown from "showdown"

import { globalHistory } from "@reach/router"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MarkdownContent from "../components/markdownContent"
import Card from "../components/card"
import Section from "../components/section"

export default function StoryTemplate({ data }) {
  const converter = new showdown.Converter()

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const href = globalHistory.location.href

  // Get related stories.
  const featuredStories = data.stories.nodes.filter(story =>
    frontmatter.related_stories.includes(story.frontmatter.title)
  )

  // Get books.
  const books = data.books.nodes.filter(book =>
    frontmatter.books.includes(book.frontmatter.title)
  )

  // Get profiles.
  const profiles = data.profiles.nodes.filter(profile =>
    frontmatter.profiles.includes(profile.frontmatter.title)
  )

  const hero = frontmatter.hero.story_hero_image

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

          <div className="lg:w-4/5 max-w-2xl mb-40 md:mb-56">
            <p
              className={`text-sm uppercase mb-0 tracking-widest mb-4 ${
                hero ? "text-michigan-maize" : "text-dusk-blue"
              }`}
            >
              {frontmatter.categories.join(" | ")}
            </p>
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-375 leading-105 font-semibold ${
                hero ? "text-very-light-blue" : ""
              }`}
            >
              {frontmatter.title}
            </h1>
            {frontmatter.hero.story_hero_image && frontmatter.hero.text && (
              <p className="font-semibold mt-2 text-white text-lg">
                {frontmatter.hero.text}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-start relative z-5 -mt-32">
        <div
          className={`lg:w-1/5 lg:sticky top-9 mb-10 lg:mb-0 mx-auto lg:mx-0 ${
            hero ? "lg:pt-48" : ""
          }`}
        >
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

        <div className="lg:w-4/5 max-w-2xl">
          <figure className="mb-20 text-xs text-slate-grey">
            <img
              src={frontmatter.story_image.file}
              alt={frontmatter.story_image.alt}
              className="mb-4 rounded-lg animated fade-in-up max-h-24 w-full"
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
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(html) }}
            className="markdown text-lg mb-8 drop-cap"
          />

          <div className="text-almost-black border-t border-b lg:flex justify-between py-2 text-sm mb-12">
            {frontmatter.author && <div>By {frontmatter.author}</div>}
            <time dateTime={frontmatter.plainDate}>{frontmatter.date}</time>
          </div>

          {frontmatter.highlight_box.text && (
            <div className="border-l-8 border-michigan-maize pt-4 pl-6 pb-1 mb-20">
              <MarkdownContent
                content={frontmatter.highlight_box.text}
                className="markdown small-margin"
              />
            </div>
          )}

          {books.length > 0 && (
            <div className="lg:flex justify-between mb-20">
              <h2 className="text-4xl font-semibold font-serif mb-4 mr-12">
                Books:
              </h2>
              <div className="sm:flex flex-grow flex-wrap justify-between">
                {books.map(book => {
                  return (
                    <a
                      href={book.frontmatter.link}
                      className="group sm:w-2/5 text-sm mb-8 sm:mb-4 block"
                    >
                      <img
                        className="mb-4 lg:w-full group-hover:shadow-1"
                        src={book.frontmatter.image.file}
                        alt={book.frontmatter.image.alt}
                      />
                      <h3 className="font-bold mb-0 group-hover:underline">
                        {book.frontmatter.title}
                      </h3>
                      <p>{book.frontmatter.description}</p>
                      <p className="text-xs">by {book.frontmatter.author}</p>
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {profiles.length > 0 && (
            <div className="my-20">
              <h2 className="text-4xl font-serif font-semibold mb-10">
                Profiles
              </h2>
              {profiles.map(profile => {
                return (
                  <div className="lg:flex items-center mb-16 text-lg">
                    <img
                      src={profile.frontmatter.faculty_image}
                      alt={profile.frontmatter.title}
                      className="lg:w-1/3 mb-8 lg:mb-0 mx-auto lg:mx-0 mb-8 lg:mb-0"
                    />
                    <div className="lg:w-2/3 ml-8 pl-8 border-l-4 border-michigan-blue">
                      <h2 className="text-2xl font-semibold">{profile.frontmatter.title}</h2>
                      <p className="text-base">{profile.frontmatter.job_title}</p>
                      <p>"{profile.frontmatter.quotes[0].quote}"</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {featuredStories.length > 0 && (
        <Section heading="Explore more stories:" className="mb-20">
          <div className="flex flex-wrap -mx-3">
            {featuredStories.map(story => {
              return (
                <Card
                  key={story.frontmatter.title}
                  title={story.frontmatter.title}
                  href={story.frontmatter.path}
                  image={story.frontmatter.story_image.file}
                  alt={story.frontmatter.story_image.alt}
                  subtitle={story.frontmatter.categories.join(" | ")}
                  className="md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8 lg:mb-0"
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
      excerpt(pruneLength: 140, truncate: true)
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM YYYY")
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
          text
        }
        related_stories
        books
        profiles
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

    books: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "book" } } }
    ) {
      nodes {
        frontmatter {
          title
          author
          link
          description
          image {
            file
            alt
          }
        }
      }
    }

    profiles: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "profile" } } }
    ) {
      nodes {
        frontmatter {
          faculty_image
          title
          job_title
          quotes {
            quote
          }
        }
      }
    }
  }
`
