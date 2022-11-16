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
    // All research outputs sorted by Altmetric Attention Score mentioned in the past week published by Michigan Publishing
    const altmetricURL = `https://www.altmetric.com/explorer/api/research_outputs?digest=921ba768088a6ecfbf6ea8aab737cde7a38f7c41&filter%5Bpublisher_id%5D%5B%5D=874d100a-8085-4491-a085-7445c912ee93&filter%5Btimeframe%5D=1w&key=5b38d3048a7d4e9cb98c2e24ffc48713&page[number]=1&page[size]=4`

    // Enable loading.
    this.setState({ loading: true })

    // Call the API.
    const response = await axios.get(altmetricURL)
    const { data } = response.data

    // Loop through results.
    for (const book of data) {
      // Grab author and DOI info.
      const pubData = await this.getPubInfo(book.id)

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
          book.attributes.identifiers.isbns[0],
          book.attributes.title,
        )
      }

      // Add article image.
      if (book.attributes["output-type"] !== `book`) {
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
  getPubInfo = async id => {
    const response = await axios.get(`https://api.altmetric.com/v1/id/${id}`)
    return response
  }

  // Calls google book API to get cover images.
  getBookCover = async (isbn, title) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${isbn}`
    )

    // // Grab title from response.
    if (response.data.totalItems) {
      const responseTitle = response.data.items[0].volumeInfo.title

      // Set default thumbnail value.
      let thumbnail = `/assets/article.png`

      // Check to see if response title matches expected title.
      if (responseTitle === title) {
        thumbnail = response.data.items[0].volumeInfo.imageLinks.thumbnail

        // Replace the zoom so we can get a larger image.
        thumbnail = thumbnail.replace(`zoom=1`, `zoom=2`)

        // Ensure we are using the https URL.
        thumbnail = thumbnail.replace(`http`, `https`)

        // Remove book curl.
        thumbnail = thumbnail.replace(`&edge=curl`, ``)
      }

      return thumbnail
    }
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
          <div className="flex-wrap justify-between -m-4 md:flex lg:flex-no-wrap fade-in">
            {this.state.trending.map(book => {
              return (
                <a
                  href={book.link}
                  className="flex flex-col px-4 pb-8 mb-8 overflow-hidden border-b-4 trending lg:w-1/4 md:w-1/2 lg:m-4 lg:px-0 lg:mb-0 border-dusk-blue"
                  key={book.id}
                >
                  <div className="mb-8 lg:h-414">
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
                    <h3 className="mb-1 text-xl font-semibold">{book.title}</h3>

                    <p className="text-battleship-grey">
                      {book.authors && book.authors.join(" | ")}
                      {!book.authors && book.editors && book.editors.join(" | ")}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <h4 className="mb-4 font-semibold uppercase">
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
