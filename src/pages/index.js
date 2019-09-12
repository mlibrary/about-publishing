import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Card } from "@umich-lib/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MarkdownContent from "../components/markdownContent"
import Section from "../components/section"
import Profile from "../components/profile"
import Infographic from "../components/infographic"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      content: markdownRemark(frontmatter: { type: { eq: "homepage" } }) {
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
          highlight {
            heading
            image {
              alt
              file
            }
            link_text
            link_url
          }
          infographics {
            heading
            infographics {
              large_text
              small_text
            }
          }
          profile
          stories
        }
      }

      profiles: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "profile" } } }
      ) {
        edges {
          node {
            frontmatter {
              quote
              title
              job_title
              faculty_image
            }
          }
        }
      }

      stories: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "story" } } }
      ) {
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

  const { frontmatter } = data.content

  // Get profile.
  const selectedProfile = data.profiles.edges.filter(
    profile => profile.node.frontmatter.title === frontmatter.profile
  )

  const profileData = selectedProfile[0].node.frontmatter

  // Get featured stories.
  const featuredStories = data.stories.nodes.filter(story =>
    frontmatter.stories.includes(story.frontmatter.title)
  )

  return (
    <Layout>
      <SEO title="Home" />

      <h1>{frontmatter.hero_section.heading}</h1>

      <MarkdownContent content={frontmatter.hero_section.text} />

      <img
        src={frontmatter.hero_section.image.file}
        alt={frontmatter.hero_section.image.alt}
      />

      <Section
        heading={frontmatter.highlight.heading}
        linkURL={frontmatter.highlight.link_url}
        linkText={frontmatter.highlight.link_text}
      >
        <img
          src={frontmatter.highlight.image.file}
          alt={frontmatter.highlight.image.alt}
        />
      </Section>

      <Section heading="Profiles">
        <Profile
          name={profileData.title}
          image={profileData.faculty_image}
          quote={profileData.quote}
          title={profileData.job_title}
        />
      </Section>

      <Section heading="Stories of Impact">
        {featuredStories.map(story => {
          return (
            <Card
              title={story.frontmatter.title}
              href={story.frontmatter.path}
              image={story.frontmatter.image.file}
              subtitle={story.frontmatter.categories.join("|")}
            >
              {story.excerpt}
            </Card>
          )
        })}
      </Section>

      <Section heading="Trending">
        Need to connect to API.
      </Section>

      <Section heading={frontmatter.infographics.heading}>
        {frontmatter.infographics.infographics.map(infographic => {
          return (
            <Infographic largeText={infographic.large_text} smallText={infographic.small_text} />
          )
        })}
      </Section>
    </Layout>
  )
}

export default IndexPage
