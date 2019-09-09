import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card } from "@umich-lib/core"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "homepage" } }) {
        html
        frontmatter {
          hero_section {
            heading
            text
            image {
              alt
              file
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.markdownRemark.frontmatter.hero_section.heading}</h1>
      
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.frontmatter.hero_section.text}} />

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
}

export default IndexPage
