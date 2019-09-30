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
        editors: pubData.data.editors,
        link: pubData.data.url,
        id: book.id,
        imageLoaded: false,
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
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
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

    // Ensure we are using the https URL.
    thumbnail = thumbnail.replace(`http`, `https`)

    // Remove book curl.
    thumbnail = thumbnail.replace(`&edge=curl`, ``)

    return thumbnail
  }

  replaceImage = id => {
    this.setState(state => {
      const trendingState = state.trending.map(publication => {
        if (publication.id === id) {
          publication.imageLoaded = true
        }

        return publication
      })

      return trendingState
    })
  }

  render() {
    return (
      <div>
        {this.state.loading && (
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        )}

        {!this.state.loading && (
          <div className="md:flex flex-wrap lg:flex-no-wrap justify-between -m-4 fade-in">
            {this.state.trending.map(book => {
              return (
                <a
                  href={book.link}
                  className="trending lg:w-1/4 md:w-1/2 lg:m-4 px-4 lg:px-0 pb-8 mb-8 lg:mb-0 flex flex-col border-b-4 border-dusk-blue overflow-hidden"
                  key={book.id}
                >
                  <div className="lg:h-414 mb-8">
                    {book.image && (
                      <img
                        src={book.image}
                        alt={book.title}
                        role="presentation"
                        className={`trending-image overflow-hidden rounded ${
                          book.imageLoaded ? "fade-in" : ""
                        }`}
                        onLoad={() => this.replaceImage(book.id)}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{book.title}</h3>

                    <p className="text-battleship-grey">
                      {book.authors && book.authors.join(" | ")}
                      {!book.authors && book.editors.join(" | ")}
                    </p>
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
