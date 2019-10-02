import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"

import MarkdownContent from "../../components/markdownContent"

const StoryPreview = ({ entry, widgetFor, widgetsFor, fieldsMetaData }) => {
  const hero = entry.getIn(["data", "hero", "story_hero_image"])
  const title = entry.getIn(["data", "title"])
  const categories = entry.getIn(["data", "categories"])
  const text = entry.getIn(["data", "hero", "text"])
  const image = entry.getIn(["data", "story_image", "file"])
  const imageAlt = entry.getIn(["data", "story_image", "alt"])
  const caption = entry.getIn(["data", "story_image", "caption"])
  const credit = entry.getIn(["data", "story_image", "credit"])
  const body = widgetFor("body")
  const author = entry.getIn(["data", "author"])
  const date = entry.getIn(["data", "date"])
  const formattedDate = format(date, "MMMM d, y")
  const highlightText = entry.getIn(["data", "highlight_box", "text"])
  const published = entry.getIn(["data", "published"])
  const books = entry.getIn(["data", "books"])
  const profiles = entry.getIn(["data", "profiles"])

  // Check to see if any books exist.
  let booksExist = false

  books.forEach(book => {
    booksExist = book === "" ? false : true
  })

  // Check to see if any profiles exist.
  let profilesExist = false

  profiles.forEach(profile => {
    profilesExist = profile === "" ? false : true
  })

  return (
    <div className="font-sans">
      {!published && (
        <div className="text-center bg-scarlet text-white p-4 sticky top-0 z-10">
          Story is not published and will not display on the site.
        </div>
      )}
      {published && (
        <div className="text-center bg-eggshell p-4 sticky top-0 z-10">
          Story is published and will display on the site.
        </div>
      )}
      <div
        className={`${
          !hero ? "mt-12" : ""
        } text-dark bg-white container mx-auto lg:px-10 px-4 pb-4`}
      >
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
                {categories && categories.join(" | ")}
              </p>
              <h1
                className={`font-serif text-4xl md:text-5xl lg:text-375 leading-105 font-semibold ${
                  hero ? "text-very-light-blue" : ""
                }`}
              >
                {title}
              </h1>
              {hero && text && (
                <p className="font-semibold mt-2 text-white text-lg">{text}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-start relative z-5 -mt-32">
          <div
            className={`lg:w-1/5 mb-10 lg:mb-0 mx-auto lg:mx-0 ${
              hero ? "lg:pt-48" : ""
            }`}
          >
            <p className="font-serif uppercase text-2xl">Share this</p>
            <div className="flex justify-between max-w-8125">
              <a className="social-link" href="https://facebook.com">
                <span className="clip">Share on Facebook</span>
              </a>
              <a className="social-link" href="https://linkedin.com">
                <span className="clip">Share on LinkedIn</span>
              </a>
              <a className="social-link" href="https://twitter.com">
                <span className="clip">Share on Twitter</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-4/5 max-w-2xl">
            <figure className="mb-20 text-xs text-slate-grey">
              <img
                src={image}
                alt={imageAlt}
                className="mb-4 rounded-lg animated fade-in-up max-h-24 w-full"
              />
              {(caption || credit) && (
                <div>
                  {caption && <figcaption>{caption}</figcaption>}
                  {credit && <p className="italic">{credit}</p>}
                  <div className="w-40 h-1 bg-michigan-blue"></div>
                </div>
              )}
            </figure>

            <div className="markdown text-lg mb-8 drop-cap">{body}</div>

            <div className="text-almost-black border-t border-b lg:flex justify-between py-2 text-sm mb-12">
              {author && <div>By {author}</div>}
              <time>{formattedDate}</time>
            </div>

            {highlightText && (
              <div className="border-l-8 border-michigan-maize pt-4 pl-6 pb-1 mb-20">
                <MarkdownContent
                  content={highlightText}
                  className="markdown small-margin"
                />
              </div>
            )}

            {booksExist && (
              <div className="lg:flex justify-between mb-20">
                <h2 className="text-4xl font-semibold font-serif mb-4 mr-12">
                  Books:
                </h2>
                <div className="sm:flex flex-grow flex-wrap justify-between">
                  {books.map(book => {
                    const bookData = fieldsMetaData.getIn([
                      "books",
                      "books",
                      book,
                    ])

                    let title = ""
                    let link = ""
                    let image = ""
                    let imageAlt = ""
                    let description = ""
                    let author = ""

                    if (bookData) {
                      title = bookData.getIn(["title"])
                      link = bookData.getIn(["link"])
                      image = bookData.getIn(["image", "file"])
                      imageAlt = bookData.getIn(["image", "alt"])
                      description = bookData.getIn(["description"])
                      author = bookData.getIn(["author"])
                    }

                    return (
                      <a
                        href={link}
                        className="group sm:w-2/5 text-sm mb-8 sm:mb-4 block"
                      >
                        <img
                          className="mb-4 lg:w-full group-hover:shadow-1"
                          src={image}
                          alt={imageAlt}
                        />
                        <h3 className="font-bold mb-0 group-hover:underline">
                          {title}
                        </h3>
                        <p>{description}</p>
                        <p className="text-xs">by {author}</p>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            {profilesExist && (
              <div className="my-20">
                <h2 className="text-4xl font-serif font-semibold mb-10">
                  Profiles
                </h2>
                {profiles.map(profile => {
                  const profileData = fieldsMetaData.getIn([
                    "profiles",
                    "profiles",
                    profile,
                  ])

                  let name = ""
                  let quotes = ""
                  let firstQuote = ""
                  let image = ""

                  if (profileData) {
                    name = profileData.getIn(["title"])
                    quotes = profileData.getIn(["quotes"])
                    image = profileData.getIn(["faculty_image"])

                    // Show the first quote.
                    quotes.forEach((quote, index) => {
                      if (index === 0) {
                        firstQuote = quote
                      }
                    })
                  }

                  return (
                    <div className="lg:flex items-center mb-16 text-lg">
                      <img
                        src={image}
                        alt={name}
                        className="lg:w-1/3 mb-8 lg:mb-0 mx-auto lg:mx-0 mb-8 lg:mb-0"
                      />
                      <p className="lg:w-2/3 ml-8 pl-8 border-l-4 border-michigan-blue">
                        {firstQuote && firstQuote.getIn(["quote"])}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

StoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default StoryPreview
