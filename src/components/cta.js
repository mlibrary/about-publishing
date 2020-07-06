import React from "react"

export const Cta = ({ image, alt, heading, text, buttonText, buttonLink }) => {
  return (
    <div className="sm:flex">
      {image && (
        <img
          src={image}
          alt={alt}
          className="flex-shrink-0 border-l-4 border-michigan-maize sm:w-5/12"
        />
      )}

      <div className="px-6 pb-6 sm:w-7/12 bg-pale-grey pt-275">
        <h3 className="mb-4 font-serif text-2xl font-semibold">{heading}</h3>
        <p>{text}</p>
        {buttonLink && (
          <a
            href={buttonLink}
            className="inline-flex items-center px-4 py-2 font-bold rounded-sm transition-color focus:text-michigan-blue focus:bg-michigan-maize hover:text-michigan-blue hover:bg-michigan-maize bg-michigan-blue text-michigan-maize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              className="mr-2 fill-current"
            >
              <path d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12z" />
            </svg>
            <span>{buttonText} »</span>
          </a>
        )}
      </div>
    </div>
  )
}
