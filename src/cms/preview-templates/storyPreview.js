import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"
import MarkdownContent from "../../components/markdownContent"

const StoryPreview = ({ entry, widgetFor }) => {
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

  return (
    <div
      className={`${
        !hero ? "mt-12" : ""
      } font-sans text-dark bg-white container mx-auto lg:px-10 px-4 pb-4`}
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
              className="mb-4 rounded-lg animated fade-in-up"
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
