import React from "react"

export const Slide = ({ image, alt, heading, text }) => (
  <div className="h-full border rounded border-very-light-blue">
    {image && <img src={image} alt={alt} className="w-full" />}

    <div className="p-6">
      <p className="mb-3 font-semibold leading-tight text-175">{heading}</p>
      <p>{text}</p>
    </div>
  </div>
)
