import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Signature = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "signature.png" }) {
        childImageSharp {
          fluid(maxWidth: 337) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{ maxWidth: `337px` }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Signature
