import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Card } from "@umich-lib/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StoriesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "story" } } }) {
        nodes {
          frontmatter {
            title
            path
            image {
              alt
              file
            }
            categories
          }
          excerpt(pruneLength: 140, truncate: true)
        }
      }
    }
  `)

  const stories = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Stories of Impact" />
      <h1>Stories of Impact</h1>
      <div
        css={{
          display: `flex`,
          flexWrap: `wrap`,
          margin: `-1rem`,
        }}
      >
        {stories &&
          stories.map(story => {
            return (
              <Card
                key={story.frontmatter.path}
                href={story.frontmatter.path}
                title={story.frontmatter.title}
                image={story.frontmatter.image.file}
                subtitle={story.frontmatter.categories.join(` | `)}
                css={{
                  padding: `1rem`,
                  flexBasis: `33%`,
                  "@media(max-width: 960px)": {
                    flexBasis: `50%`,
                  },
                  "@media(max-width: 640px)": {
                    flexBasis: `100%`,
                  },
                }}
              >
                {story.frontmatter.excerpt}
              </Card>
            )
          })}
      </div>
    </Layout>
  )
}

export default StoriesPage
