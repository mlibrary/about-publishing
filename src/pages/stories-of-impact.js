import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Card from "../components/card"
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
            story_image {
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
      <div className="flex flex-wrap -m-4">
        {stories &&
          stories.map(story => {
            return (
              <Card
                key={story.frontmatter.path}
                href={story.frontmatter.path}
                title={story.frontmatter.title}
                image={story.frontmatter.story_image.file}
                subtitle={story.frontmatter.categories.join(` | `)}
                className="p-4 w-full md:w-1/2 lg:w-1/3"
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
