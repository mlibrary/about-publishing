import React from "react"

const Quote = ({ quote, name, title }) => {
  return (
    <blockquote className="px-6 py-4 border-l-8 bg-michigan-maize border-golden quote">
      <p className="relative pt-4 pl-8 font-serif text-2xl">{quote}</p>
      <footer className="text-right text-09375">
        <cite className="not-italic">
          - {name}
          <br />
          {title}
        </cite>
      </footer>
    </blockquote>
  )
}

export default Quote
