import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import PageHeading from "../components/pageHeading"

export default function StoryList({ data, pageContext }) {
  const { currentPage, storyPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === storyPages
  const prevPage =
    currentPage - 1 === 1
      ? "/stories-of-impact"
      : `/stories-of-impact/${(currentPage - 1).toString()}`
  const nextPage = `/stories-of-impact/${(currentPage + 1).toString()}`

  const stories = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Stories of Impact" />

      <PageHeading heading="Stories of Impact" />

      <div className="flex flex-wrap -m-4 mb-12">
        {stories.map(story => {
          const { frontmatter } = story.node

          return (
            <Card
              key={frontmatter.path}
              href={frontmatter.path}
              title={frontmatter.title}
              image={frontmatter.story_image.file}
              alt={frontmatter.story_image.alt}
              subtitle={frontmatter.categories.join(` | `)}
              className="p-4 w-full md:w-1/2 lg:w-1/3"
            >
              {story.node.excerpt}
            </Card>
          )
        })}
      </div>

      {storyPages > 1 && (
        <div className="border-t-2 border-b-2 border-bluey-grey py-3 mb-20 flex justify-between font-semibold">
          <div>
            {!isFirst && (
              <div>
                <AniLink
                  fade
                  duration={0.25}
                  to="/stories-of-impact"
                  className="mr-8 hidden md:inline"
                >
                  « first
                </AniLink>

                <AniLink fade duration={0.25} to={prevPage}>
                  ‹ previous
                </AniLink>
              </div>
            )}

            {isFirst && (
              <div className="text-almost-black-30">
                <span className="mr-8 hidden md:inline">« first</span>
                <span>‹ previous</span>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            {Array.from({ length: storyPages }, (_, i) => (
              <AniLink
                fade
                duration={0.25}
                key={`pagination-number${i + 1}`}
                to={`/stories-of-impact/${i === 0 ? "" : i + 1}`}
                className={`py-1 px-2 ${
                  currentPage === i + 1 ? "bg-michigan-blue text-white" : ""
                }`}
              >
                {i + 1}
              </AniLink>
            ))}
          </div>

          <div>
            {!isLast && (
              <div>
                <AniLink fade duration={0.25} to={nextPage}>
                  next ›
                </AniLink>

                <AniLink
                  fade
                  duration={0.025}
                  to={`/stories-of-impact/${storyPages.toString()}`}
                  className="ml-8 hidden md:inline"
                >
                  last »
                </AniLink>
              </div>
            )}

            {isLast && (
              <div className="text-almost-black-30">
                <span className="mr-8">next ›</span>
                <span className="hidden md:inline">last »</span>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  )
}

export const storyListQuery = graphql`
  query storyListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: {published: { eq: true }, type: { eq: "story" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
  }
`
