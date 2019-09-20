import React, { Component } from "react"
import axios from "axios"

class Trending extends Component {
  state = {
    loading: false,
    trending: [],
  }

  componentDidMount() {
    // Grab trending publications.
    this.fetchTrending()
  }

  fetchTrending = async () => {
    const altmetricURL = `https://www.altmetric.com/explorer/api/research_outputs?digest=a3ae1892185418ae27381af7debdfc27079cf849&filter%5Bpublisher_id%5D%5B%5D=874d100a-8085-4491-a085-7445c912ee93&filter%5Bview%5D=list&key=a4456035b7204a529a25fb2431effed5&page[number]=1&page[size]=4`

    // Enable loading.
    this.setState({ loading: true })

    // Call the API.
    const response = await axios.get(altmetricURL)
    const { data } = response.data

    // Loop through results.
    for (const book of data) {
      // Grab author and DOI info.
      const pubData = await this.getPubInfo(book.attributes.identifiers.dois[0])

      // Build book object.
      const bookData = {
        title: book.attributes.title,
        mentions: book.attributes.mentions,
        authors: pubData.data.authors,
        link: pubData.data.url,
      }

      // Add book cover
      if (book.attributes["output-type"] === `book`) {
        bookData.image = await this.getBookCover(
          book.attributes.identifiers.isbns[0]
        )
      }

      // Add article image.
      if (book.attributes["output-type"] === `article`) {
        bookData.image = `/assets/article.png`
      }

      // Update the state.
      this.setState({ trending: [...this.state.trending, bookData] })
    }

    // Disable loading.
    this.setState({ loading: false })
  }

  // Grabs info from altmetric doi endpoint.
  getPubInfo = async doi => {
    const response = await axios.get(`https://api.altmetric.com/v1/doi/${doi}`)
    return response
  }

  // Calls google book API to get cover images.
  getBookCover = async isbn => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${isbn}`
    )

    let thumbnail = response.data.items[0].volumeInfo.imageLinks.thumbnail

    // Replace the zoom so we can get a larger image.
    thumbnail = thumbnail.replace(`zoom=1`, `zoom=2`)

    // Remove book curl.
    thumbnail = thumbnail.replace(`&edge=curl`, ``)

    return thumbnail
  }

  render() {
    return (
      <div>
        {!this.state.loading && (
          <div className="lg:flex -m-4">
            {this.state.trending.map(book => {
              return (
                <a href={book.link} className="trending lg:w-1/4 m-4 pb-8 flex flex-col border-b-4 border-dusk-blue overflow-hidden">
                  <img
                    src={book.image}
                    alt=""
                    role="presentation"
                    className="mb-8 w-full trending-image overflow-hidden rounded"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{book.title}</h3>
                    {book.authors &&
                      <p className="text-battleship-grey">{book.authors.join(" | ")}</p>
                    }
                  </div>
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
                </a>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default Trending
