import React from "react"
import PropTypes from "prop-types"
import showdown from "showdown"

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

  console.log(body)

  const converter = new showdown.Converter()

  return (
    <div className="font-sans text-dark bg-white container mx-auto lg:px-10 px-4 pb-4">
      <div
        className="full-width"
        style={{ background: `url(${hero}) no-repeat center/cover` }}
      >
        <div
          className={`container mx-auto px-10 flex relative z-5 ${
            hero ? "pt-20 lg:pt-40" : ""
          }`}
        >
          <div className="lg:w-1/5"></div>

          <div className="lg:w-4/5 max-w-2xl mb-56">
            <p
              className={`text-sm uppercase mb-0 tracking-widest mb-4 ${
                hero ? "text-michigan-maize" : "text-dusk-blue"
              }`}
            >
              {categories.join(" | ")}
            </p>
            <h1
              className={`font-serif text-5xl lg:text-375 leading-105 font-semibold ${
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
        <div className="lg:w-4/5 max-w-2xl">
          <figure className="mb-20 text-xs text-slate-grey">
            <img
              src={image}
              alt={imageAlt}
              className="mb-4 metaDescriptionrounded-lg animated fade-in-up"
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
