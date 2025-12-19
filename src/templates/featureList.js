import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import PageHeading from "../components/pageHeading"

export default function FeatureList({ data, pageContext }) {
  const { currentPage, featurePages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === featurePages
  const prevPage =
    currentPage - 1 === 1
      ? "/features"
      : `/features/${(currentPage - 1).toString()}`
  const nextPage = `/features/${(currentPage + 1).toString()}`

  const features = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Features" />

      <PageHeading heading="Features" />

      <div className="flex flex-wrap mb-12 -m-4">
        {features.map(feature => {
          const { frontmatter } = feature.node

          return (
            <Card
              key={frontmatter.path}
              href={frontmatter.path}
              title={frontmatter.title}
              image={frontmatter.feature_image.file}
              alt={frontmatter.feature_image.alt}
              subtitle=""
              className="w-full p-4 md:w-1/2 lg:w-1/3"
            >
              {feature.node.excerpt}
            </Card>
          )
        })}
      </div>

      {featurePages > 1 && (
        <div className="flex justify-between py-3 mb-20 font-semibold border-t-2 border-b-2 border-bluey-grey">
          <div>
            {!isFirst && (
              <div>
                <AniLink
                  fade
                  duration={0.25}
                  to="/features"
                  className="hidden mr-8 md:inline"
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
                <span className="hidden mr-8 md:inline">« first</span>
                <span>‹ previous</span>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            {Array.from({ length: featurePages }, (_, i) => (
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
                  to={`/feautres/${featurePages.toString()}`}
                  className="hidden ml-8 md:inline"
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

export const featureListQuery = graphql`
  query featureListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: {published: { eq: true }, type: { eq: "feature" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            feature_image {
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
