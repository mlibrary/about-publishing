import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/pageHeading"

class SearchPage extends Component {
  componentDidMount() {
    ;(function() {
      var cx = "015945274698086837667:8xdndhei_9o"
      var gcse = document.createElement("script")
      gcse.type = "text/javascript"
      gcse.async = true
      gcse.src = "https://cse.google.com/cse.js?cx=" + cx
      var s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(gcse, s)
    })()
  }

  render() {
    return (
      <Layout>
        <SEO title="Search" />

        <div>
          <PageHeading heading="Search" />
          <div className="gcse-search"></div>
        </div>
      </Layout>
    )
  }
}

export default SearchPage
