import React, { Component } from "react"
import axios from "axios"

import { graphql } from "gatsby"

import Card from "../components/card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MarkdownContent from "../components/markdownContent"
import Section from "../components/section"
import Profile from "../components/profile"
import Infographic from "../components/infographic"

export const IndexQuery = graphql`
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
  state = {
    loading: false,
    trending: [],
  }

  componentDidMount() {
    this.fetchTrending()
  }

  fetchTrending = () => {
    this.setState({ loading: true })
    axios
      .get(
        `https://www.altmetric.com/explorer/api/research_outputs?digest=a3ae1892185418ae27381af7debdfc27079cf849&filter%5Bpublisher_id%5D%5B%5D=874d100a-8085-4491-a085-7445c912ee93&filter%5Bview%5D=list&key=a4456035b7204a529a25fb2431effed5&page[number]=1&page[size]=4`
      )
      .then(({ data }) => {
        data.data.forEach(({ attributes }) => {
          const bookData = {
            title: attributes.title,
            mentions: attributes.mentions,
            image: attributes["badge-url"],
          }

          // Add book data to trending state.
          this.setState({ trending: [...this.state.trending, bookData] })
        })

        // Set loading to false to display our trending books.
        this.setState({ loading: false })
      })
  }

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

        <div className="lg:flex justify-between items-center mb-20">
          <div className="lg:w-5/12 mr-6 mb-8 lg:mb-0">
            <h1 className="text-35 font-extrabold leading-118 mb-10">
              {frontmatter.hero_section.heading}
            </h1>

            <div className="text-lg border-l-8 border-michigan-maize pl-6 leading-normal">
              <MarkdownContent content={frontmatter.hero_section.text} />
            </div>
          </div>

          <img
            src={frontmatter.hero_section.image.file}
            alt={frontmatter.hero_section.image.alt}
            className="w-7/12"
          />
        </div>

        <div className="lg:flex -mx-4 mb-20">
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
              quote={profileData.quote}
              title={profileData.job_title}
            />
          </Section>
        </div>

        <Section
          heading="Stories of Impact"
          className="mb-20"
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
                  className="md:w-1/2 lg:w-1/3 px-3 flex flex-col"
                >
                  {story.excerpt}
                </Card>
              )
            })}
          </div>
        </Section>

        <Section
          heading="Trending"
          className="mb-20"
          linkURL="https://www.altmetric.com/explorer/outputs?publisher_id%5B%5D=874d100a-8085-4491-a085-7445c912ee93&view=list"
          linkText="See More"
        >
          {!this.state.loading && (
            <div className="lg:flex -m-4">
              {this.state.trending.map(book => {
                return (
                  <div className="lg:w-1/4 m-4 pb-8 flex flex-col border-b-4 border-dusk-blue overflow-hidden">
                    <img
                      src={book.image}
                      alt=""
                      role="presentation"
                      className="mb-8 w-full trending-image overflow-hidden"
                    />
                    <div className="mt-auto">
                      <h4 className="uppercase font-semibold mb-4">
                        Mentioned By:
                      </h4>
                      {book.mentions.msm && (
                        <div>{book.mentions.msm} news outlets</div>
                      )}
                      {book.mentions.blog && (
                        <div>{book.mentions.blog} blogs</div>
                      )}
                      {book.mentions.tweet && (
                        <div>{book.mentions.tweet} tweeters</div>
                      )}
                      {book.mentions.fbwall && (
                        <div>{book.mentions.fbwall} Facebook pages</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Section>

        <Section heading={frontmatter.infographics.heading} className="mb-16">
          <div className="lg:flex justify-between mx-12">
            {frontmatter.infographics.infographics.map(infographic => {
              return (
                <Infographic
                  key={infographic.small_text}
                  largeText={infographic.large_text}
                  smallText={infographic.small_text}
                  className="max-w-xs flex"
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
