import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/pageHeading"

class OurReachPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Our Reach" />
        <PageHeading heading="Our Reach"></PageHeading>
        <p className="text-lg mb-6">Michigan Publishing serves faculty, staff, and students across the campus.</p>
        <iframe width="100%" height="800" src="https://www.publishing.umich.edu/readership-map/"></iframe>
      </Layout>
    )
  }
}

export default OurReachPage
