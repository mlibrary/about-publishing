import React, { useState } from "react"

import Quote from "../components/quote"
import { Slide } from "../components/slide"

const QuoteSlider = ({ content, books, slides }) => {
  let next
  let prev
  const [slidePosition, setSlide] = useState(0)

  if (slides) {
    const slideMax = (slides.length - 1) * -41.666667

    next = () => {
      if (slidePosition > slideMax) {
        setSlide(slidePosition - 41.666667)
      }
    }

    prev = () => {
      if (slidePosition < 0) {
        setSlide(slidePosition + 41.666667)
      }
    }
  }

  return (
    <div>
      {books
        .filter(book => content.book.includes(book.frontmatter.title))
        .map(book => (
          <div>
            <h3 className="font-sans text-3xl font-semibold">
              {book.frontmatter.title}
            </h3>
            <p className="font-bold text-metallic-blue">
              {book.frontmatter.author}
            </p>
            <div className="mb-6 sm:flex">
              <img
                src={book.frontmatter.image.file}
                alt={book.frontmatter.image.alt}
                className="flex-shrink-0 pr-6 mb-6 rounded sm:w-4/12 sm:mb-0"
              />

              <Quote
                quote={content.quote.quote}
                name={content.quote.name}
                title={content.quote.title}
              />
            </div>
          </div>
        ))}

      {slides && (
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
      )}

      {slides && (
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
      )}
    </div>
  )
}

export default QuoteSlider
