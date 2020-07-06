import React, { useState } from "react"

import Quote from "../components/quote"
import { Slide } from "../components/slide"

const QuoteSlider = ({ content, books, slides }) => {
  const [slidePosition, setSlide] = useState(0)
  const slideMax = (slides.length - 1) * -41.666667

  const next = () => {
    if (slidePosition > slideMax) {
      setSlide(slidePosition - 41.666667)
    }
  }

  const prev = () => {
    if (slidePosition < 0) {
      setSlide(slidePosition + 41.666667)
    }
  }

  return (
    <div>
      <h3 className="font-sans text-3xl font-semibold">{content.heading}</h3>
      <p className="font-bold text-metallic-blue">{content.subheading}</p>
      <div className="flex mb-6">
        {books
          .filter(book => content.book.includes(book.frontmatter.title))
          .map(book => (
            <img
              src={book.frontmatter.image.file}
              alt={book.frontmatter.image.alt}
              className="flex-shrink-0 w-4/12 pr-6"
            />
          ))}

        <Quote
          quote={content.quote.quote}
          name={content.quote.name}
          title={content.quote.title}
        />
      </div>
      <div className="relative mb-4 overflow-hidden">
        <div
          className="-mt-3 -mb-3 -ml-3 transition-transform md:flex"
          style={{ transform: `translateX(${slidePosition}%)` }}
        >
          {slides.map(slide => (
            <div className="flex-shrink-0 p-3 md:w-5/12">
              <Slide
                image={slide.image}
                alt={slide.image_alt}
                heading={slide.title}
                text={slide.text}
              />
            </div>
          ))}
        </div>

        {/* Slide blur */}
        <div className="absolute top-0 right-0 flex-shrink-0 hidden w-2/12 h-90 slide-blur md:block"></div>
      </div>

      <div className="justify-end hidden underline text-mid-blue md:flex">
        <button onClick={() => prev()} className="flex items-center mr-2">
          <svg
            className="w-4 h-4 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          <span>Prev</span>
        </button>

        <button onClick={() => next()} className="flex items-center ml-2">
          <span>Next</span>
          <svg
            className="w-4 h-4 -rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default QuoteSlider
