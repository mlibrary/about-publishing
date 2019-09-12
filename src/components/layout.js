/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import "typeface-muli"
import "typeface-crimson-text"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          html,
          body,
          p,
          ol,
          ul,
          li,
          dl,
          dt,
          dd,
          blockquote,
          figure,
          fieldset,
          legend,
          textarea,
          pre,
          iframe,
          hr,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
            padding: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 100%;
            font-weight: normal;
          }
          ul {
            list-style: none;
          }
          button,
          input,
          select,
          textarea {
            margin: 0;
          }
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          img,
          video {
            height: auto;
            max-width: 100%;
          }
          iframe {
            border: 0;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          td,
          th {
            padding: 0;
            text-align: left;
          }
          a {
            text-decoration: none;
          }
          body {
            font-family: "Muli", serif;
          }
          button {
            border: 0;
          }
        `}
      />

      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        css={{
          margin: `2rem auto`,
          maxWidth: 1280,
          padding: `1rem 2.5rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
