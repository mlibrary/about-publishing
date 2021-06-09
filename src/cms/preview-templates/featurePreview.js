import React, { useState } from "react"
import PropTypes from "prop-types"
import Quote from "../../components/quote"
import { Cta } from "../../components/cta"
import MarkdownContent from "../../components/markdownContent"

const FeaturePreview = ({ entry, widgetFor, widgetsFor, fieldsMetaData }) => {
  let books
  let quoteBooks
  let profiles

  const hero = entry.getIn(["data", "hero", "feature_hero_image"])
  const title = entry.getIn(["data", "title"])
  const subtitle = entry.getIn(["data", "subtitle"])
  const published = entry.getIn(["data", "published"])
  const text = entry.getIn(["data", "hero", "text"])
  const href = `https://publishing.umich.edu${entry.getIn(["data", "path"])}`
  const image = entry.getIn(["data", "feature_image", "file"])
  const body = widgetFor("body")
  const sections = entry.getIn(["data", "sections"])
  const relations = fieldsMetaData.toJS()
  const sectionRelations = relations.sections

  if (sectionRelations) {
    if (sectionRelations.content) {
      if (sectionRelations.content.book) {
        books = Object.values(sectionRelations.content.book.books)

        // Restructure books to pass to quote slider.
        quoteBooks = books.map(book => {
          return {
            frontmatter: {
              title: book.title,
              image: book.image,
              author: book.author,
            },
          }
        })
      }

      if (sectionRelations.content.profile) {
        profiles = Object.values(sectionRelations.content.profile.profiles)
      }
    }
  }

  return (
    <div className="font-sans">
      {!published && (
        <div className="sticky top-0 z-10 p-4 text-center text-white bg-scarlet">
          Feature is not published and will not display on the site.
        </div>
      )}
      {published && (
        <div className="sticky top-0 z-10 p-4 text-center bg-eggshell">
          Feature is published and will display on the site.
        </div>
      )}

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
              className={`text-sm uppercase tracking-widest mb-4 ${
                hero ? "text-michigan-maize" : "text-dusk-blue"
              }`}
            >
              {subtitle}
            </p>
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-375 leading-105 font-semibold ${
                hero ? "text-very-light-blue" : ""
              }`}
            >
              {title}
            </h1>
            {hero && text && (
              <p className="mt-2 text-lg font-semibold text-white">{text}</p>
            )}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse items-start -mt-32 lg:flex-row z-5">
        <div
          className={`lg:w-1/5 mb-10 lg:mb-0 mx-auto lg:mx-0 ${
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
              src={image}
              className="w-full mb-4 rounded-lg animated fade-in-up max-h-24"
            />
          </figure>

          <div className="mb-8 text-lg border-b markdown drop-cap">{body}</div>

          {sections &&
            widgetsFor("sections").map(section => {
              const content = section.getIn(["data", "content"])
              const heading = section.getIn(["data", "heading"])
              const subheading = section.getIn(["data", "subheading"])

              return (
                <div>
                  <div className="mb-8">
                    <h2 className="font-serif leading-tight text-35">
                      {heading}
                    </h2>
                    <p className="text-lg font-semibold text-metallic-blue">
                      {subheading}
                    </p>
                  </div>

                  {content &&
                    content.toJS().map(item => {
                      if (item.type === "quote_slider") {
                        if (quoteBooks) {
                          const book = quoteBooks.find(element => {
                            return element.frontmatter.title === item.book
                          })

                          if (book) {
                            return (
                              <div>
                                <h3 className="font-sans text-3xl font-semibold">
                                  {book.frontmatter.title}
                                </h3>
                                <p className="font-bold text-metallic-blue">
                                  {book.frontmatter.author}
                                </p>
                                <div className="mb-6 sm:flex sm:items-start">
                                  <img
                                    src={book.frontmatter.image.file}
                                    alt={book.frontmatter.image.alt}
                                    className="flex-shrink-0 mb-6 rounded sm:pr-6 sm:w-4/12 sm:mb-0"
                                  />

                                  {item.quote && [
                                    <Quote
                                      quote={item.quote.quote}
                                      name={item.quote.name}
                                      title={item.quote.title}
                                    />,
                                  ]}
                                </div>
                              </div>
                            )
                          }
                        }
                      }

                      if (item.type === "cta") {
                        return (
                          <div className="mb-12">
                            <Cta
                              image={item.image}
                              alt={item.image_alt}
                              heading={item.heading}
                              text={item.text}
                              buttonText={item.button_text}
                              buttonLink={item.button_link}
                            />
                          </div>
                        )
                      }

                      if (item.type === "podcast") {
                        return (
                          <div className="mb-12">
                            <div
                              id={item.id}
                              dangerouslySetInnerHTML={{
                                __html: item.embed_code,
                              }}
                            ></div>
                          </div>
                        )
                      }

                      if (item.type === "spacer") {
                        return (
                          <div className="mb-12">
                            <hr></hr>
                          </div>
                        )
                      }

                      if (item.type === "youtube") {
                        return (
                          <div className="mb-12">
                            <div className="embed-container">
                              <iframe
                                title="video"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${item.id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        )
                      }

                      if (item.type === "highlight") {
                        return (
                          <div
                            className="pt-4 pb-1 pl-6 mb-20 border-l-8 border-michigan-maize bg-pale-grey-2"
                            id={item.id}
                          >
                            <MarkdownContent
                              content={item.text}
                              className="markdown small-margin"
                            />
                          </div>
                        )
                      }

                      if (item.type === "image") {
                        return (
                          <figure
                            className="mb-20 text-xs text-slate-grey"
                            id={item.id}
                          >
                            <img
                              src={item.image}
                              alt={item.image_alt}
                              className="w-full mb-4 rounded-lg animated fade-in-up max-h-24"
                            />
                            {(item.caption || item.credit) && (
                              <div>
                                {item.caption && (
                                  <figcaption>{item.caption}</figcaption>
                                )}
                                {item.credit && (
                                  <p className="italic">{item.credit}</p>
                                )}
                                <div className="w-40 h-1 bg-michigan-blue"></div>
                              </div>
                            )}
                          </figure>
                        )
                      }

                      if (item.type === "profile") {
                        if (profiles) {
                          const profile = profiles.find(element => {
                            return element.title === item.profile
                          })

                          if (profile) {
                            return (
                              <div
                                className="items-center px-6 py-10 mb-16 text-lg lg:flex bg-pale-grey-2"
                                id={item.id}
                              >
                                <img
                                  src={profile.faculty_image}
                                  alt={profile.title}
                                  className="mx-auto mb-8 border rounded-full border-grey lg:w-1/3 lg:mb-0 lg:mx-0"
                                />
                                <div className="pl-8 ml-8 border-l-4 lg:w-2/3 border-michigan-blue">
                                  <p>{profile.bio}</p>
                                </div>
                              </div>
                            )
                          }
                        }
                      }
                    })}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

FeaturePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturePreview
