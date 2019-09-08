import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card } from "@umich-lib/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Advancing scholarship at U-M and beyond</h1>
    <p>
      Michigan Publishing publishes scholarly and educational materials in a
      range of formats for wide distribution and permanent preservation. We
      support the broadest possible access to scholarship by promoting:
    </p>
    <ul>
      <li>faculty public engagement and expert connections;</li>
      <li>
        diversity, equity, and inclusion through the selection and distribution
        of content; and
      </li>
      <li>
        academic innovation by publishing work that leverages digital
        technology.
      </li>
    </ul>
    <h2>Stories of Impact</h2>
    <Card
      image="https://admissions.umich.edu/sites/default/files/u6931/therapy%20dog%20nq.jpg"
      href="#"
      title="Therapaws"
      subtitle="Thursday, April 4 at 7PM"
    >
      Finals are a stressful time. Relieve some stress by petting dogs on the
      diag.
    </Card>
  </Layout>
)

export default IndexPage
