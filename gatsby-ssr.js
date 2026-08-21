/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

// You can delete this file if you're not using it

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="umich-lib-web-css"
      href="https://cdn.jsdelivr.net/npm/@umich-lib/web@latest/umich-lib.css"
      rel="stylesheet"
    />,
    <script
      key="umich-lib-web-js"
      type="module"
      src="https://cdn.jsdelivr.net/npm/@umich-lib/web@latest/dist/umich-lib/umich-lib.esm.js"
    />,
  ])
}
