const BlockquoteComponent = {
  id: "blockquote",
  label: "Blockquote",
  fields: [
    { name: "text", label: "Text", widget: "text" },
    { name: "citeName", label: "Citation name", widget: "string" },
    { name: "citeTitle", label: "Citation title", widget: "string" },
  ],
  pattern: /^<blockquote class="quote"><p>(.*)<\/p><footer><cite>- (.*)<br>(.*)<\/cite><\/footer><\/blockquote>/,
  fromBlock(match) {
    return {
      text: match[1],
      citeName: match[2],
      citeTitle: match[3],
    }
  },
  toBlock({ text, citeName, citeTitle }) {
    return `<blockquote class="quote"><p>${text}</p><footer><cite>- ${citeName}<br>${citeTitle}</cite></footer></blockquote>`
  },
}

export default BlockquoteComponent
