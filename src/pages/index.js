import React, { Component } from "react"

import { graphql } from "gatsby"

import Card from "../components/card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MarkdownContent from "../components/markdownContent"
import Section from "../components/section"
import Profile from "../components/profile"
import Infographic from "../components/infographic"
import Trending from "../components/trending"

export const IndexQuery = graphql`
  {
    content: markdownRemark(frontmatter: { type: { eq: "homepage" } }) {
      html
      frontmatter {
        hero_section {
          heading
          text
          video
          video_description
          video_link_text
          video_link
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
            quotes {
              quote
            }
            title
            job_title
            faculty_image
          }
        }
      }
    }

    stories: allMarkdownRemark(
      filter: {
        frontmatter: { published: { eq: true }, type: { eq: "story" } }
      }
    ) {
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
`

class IndexPage extends Component {
  render() {
    const { frontmatter } = this.props.data.content

    // Get profile.
    const selectedProfile = this.props.data.profiles.edges.filter(
      profile => profile.node.frontmatter.title === frontmatter.profile
    )

    const profileData = selectedProfile[0].node.frontmatter

    // Get featured stories.
    const featuredStories = this.props.data.stories.nodes.filter(story =>
      frontmatter.stories.includes(story.frontmatter.title)
    )

    return (
      <Layout>
        <SEO title="Home" />

        <div className="lg:flex justify-between items-center mb-10 md:mb-20 animated fade-in-up">
          <div className="lg:w-38 mr-6 mb-8 lg:mb-0">
            <h1 className="md:text-35 text-5xl font-extrabold leading-118 mb-10">
              {frontmatter.hero_section.heading}
            </h1>

            <div className="text-lg border-l-8 border-michigan-maize pl-6 leading-normal">
              <MarkdownContent content={frontmatter.hero_section.text} />
            </div>
          </div>

          <div className="lg:w-7/12">
            <video
              muted
              autoplay="true"
              aria-describedby="video-description"
            >
              <source
                src={frontmatter.hero_section.video}
                type="video/mp4"
              ></source>
            </video>

            <div id="video-description" className="clip">
              {frontmatter.hero_section.video_description}
            </div>

            <a
              class="text-mid-blue md:pl-4 block lg:text-right"
              href={frontmatter.hero_section.video_link}
            >
              <span class="link-hover">{frontmatter.hero_section.video_link_text} ></span>
            </a>
          </div>
        </div>

        <Section
          heading="Our Services"
          className="mb-10 lg:mb-20"
        >
          <div className="flex-wrap justify-between -m-4 md:flex md:center lg:flex-no-wrap">
            <a className="flex flex-col px-4 pb-8 m-2 mb-8 overflow-hidden border-b-4 services lg:w-1/4 md:w-1/2 lg:m-4 lg:px-0 lg:mb-0 border-dusk-blue"
               href="https://fulcrum.org">Books Hosting Services on Fulcrum</a>
            <a className="flex flex-col px-4 pb-8 m-2 mb-8 overflow-hidden border-b-4 services lg:w-1/4 md:w-1/2 lg:m-4 lg:px-0 lg:mb-0 border-dusk-blue"
               href="https://ebc.press.umich.edu/">U-M Press Ebook Collection (UMP EBC)</a>
            <a className="flex flex-col px-4 pb-8 m-2 mb-8 overflow-hidden border-b-4 services lg:w-1/4 md:w-1/2 lg:m-4 lg:px-0 lg:mb-0 border-dusk-blue"
               href="https://www.lib.umich.edu/collections/deep-blue-repositories">Deep Blue Repositories</a>
            <a className="flex flex-col px-4 pb-8 m-2 mb-8 overflow-hidden border-b-4 services lg:w-1/4 md:w-1/2 lg:m-4 lg:px-0 lg:mb-0 border-dusk-blue"
               href="https://www.humanitiesebook.org/">ACLS Humanities Ebook Collection (ACLS HEB)</a>
          </div>
        </Section>

        <div className="lg:flex -mx-4 mb-10 lg:mb-20">
          <Section
            heading={frontmatter.highlight.heading}
            linkURL={frontmatter.highlight.link_url}
            linkText={frontmatter.highlight.link_text}
            className="lg:w-1/2 px-4 mb-8 lg:mb-0"
          >
            <img
              src={frontmatter.highlight.image.file}
              alt={frontmatter.highlight.image.alt}
              className="w-full"
            />
          </Section>

          <Section heading="Profiles" className="lg:w-1/2 px-4">
            <Profile
              name={profileData.title}
              image={profileData.faculty_image}
              quote={profileData.quotes[0].quote}
              title={profileData.job_title}
            />
          </Section>
        </div>

        <Section
          heading="Stories of Impact"
          className="mb-10 lg:mb-20"
          linkText="More Stories"
          linkURL="/stories-of-impact"
        >
          <div className="md:flex flex-wrap -mx-3">
            {featuredStories.map(story => {
              return (
                <Card
                  key={story.frontmatter.title}
                  title={story.frontmatter.title}
                  href={story.frontmatter.path}
                  image={story.frontmatter.story_image.file}
                  alt={story.frontmatter.story_image.alt}
                  subtitle={story.frontmatter.categories.join("|")}
                  className="md:w-1/2 lg:w-1/3 px-3 flex flex-col lg:mb-0 mb-8"
                >
                  {story.excerpt}
                </Card>
              )
            })}
          </div>
        </Section>

        <Section heading="Trending" className="mb-10 lg:mb-20">
          <Trending />
        </Section>

        <Section heading={frontmatter.infographics.heading} className="mb-16">
          <div className="flex lg:flex-row flex-col items-center justify-between lg:mx-12">
            {frontmatter.infographics.infographics.map(infographic => {
              return (
                <Infographic
                  key={infographic.small_text}
                  largeText={infographic.large_text}
                  smallText={infographic.small_text}
                  className="max-w-xs flex justify-center mb-8 lg:mb-0"
                />
              )
            })}
          </div>
        </Section>
      </Layout>
    )
  }
}

export default IndexPage
