import React from "react"
import showdown from "showdown"

import { graphql } from "gatsby"
import { globalHistory } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuoteSlider from "../components/quoteSlider"
import Profile from "../components/profile"
import { Cta } from "../components/cta"

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
            className="mb-8 text-lg border-b markdown drop-cap"
          />

          {frontmatter.sections.map(section => (
            <div>
              <div className="mb-8">
                <h2 className="font-serif leading-tight text-35">
                  {section.heading}
                </h2>
                <p className="text-lg font-semibold text-metallic-blue">
                  {section.subheading}
                </p>
              </div>

              {section.content.map(item => (
                <div className="mb-12">
                  {item.type === "quote_slider" && (
                    <QuoteSlider
                      content={item}
                      books={data.books.nodes}
                      slides={item.slides}
                    />
                  )}

                  {item.type === "cta" && (
                    <Cta
                      image={item.image}
                      alt={item.image_alt}
                      heading={item.heading}
                      text={item.text}
                      buttonText={item.button_text}
                      buttonLink={item.button_link}
                    />
                  )}

                  {item.type === "podcast" && (
                    <iframe
                      title="podcast"
                      src={item.url}
                      frameBorder="0"
                      width="100%"
                      height="110"
                      sandbox="allow-scripts"
                      security="restricted"
                    ></iframe>
                  )}

                  {item.type === "spacer" && <hr></hr>}

                  {item.type === "profile" &&
                    data.profiles.nodes
                      .filter(
                        profile => item.profile === profile.frontmatter.title
                      )
                      .map(match => {
                        return (
                          <div className="items-center px-6 py-10 mb-16 text-lg lg:flex bg-pale-grey-2">
                            <img
                              src={match.frontmatter.faculty_image}
                              alt={match.frontmatter.title}
                              className="mx-auto mb-8 border rounded-full border-grey lg:w-1/3 lg:mb-0 lg:mx-0"
                            />
                            <div className="pl-8 ml-8 border-l-4 lg:w-2/3 border-michigan-blue">
                              <p>{match.frontmatter.bio}</p>
                            </div>
                          </div>
                        )
                      })}
                </div>
              ))}
            </div>
          ))}
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
        subtitle
        hero {
          text
          feature_hero_image
        }
        feature_image {
          file
          alt
        }
        sections {
          heading
          subheading
          content {
            heading
            subheading
            book
            quote {
              name
              quote
              title
            }
            type
            slides {
              image
              image_alt
              text
              title
            }
            image
            image_alt
            heading
            text
            button_text
            button_link
            url
            spacer
            profile
          }
        }
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
          bio
          quotes {
            quote
          }
        }
      }
    }
  }
`
