const BlockquoteComponent = {
  id: "blockquote",
  label: "Blockquote",
  fields: [
    { name: "text", label: "Text", widget: "text" },
    { name: "citeName", label: "Citation name", widget: "string" },
    { name: "citeTitle", label: "Citation title", widget: "string" },
    {
      name: "layout",
      label: "Layout",
      widget: "select",
      default: "full",
      options: [
        { label: "Floated", value: "floated" },
        { label: "Full width", value: "full" },
      ],
    },
    {
      name: "color",
      label: "Background color",
      widget: "select",
      default: "yellow",
      options: [
        {
          label: "Yellow",
          value: "yellow",
        },
        {
          label: "Blue",
          value: "blue",
        },
      ],
    },
  ],
  pattern: /^<blockquote class="quote (.*) (.*)"><p>(.*)<\/p><footer><cite>- (.*)<br>(.*)<\/cite><\/footer><\/blockquote>/,
  fromBlock(match) {
    return {
      layout: match[1],
      color: match[2],
      text: match[3],
      citeName: match[4],
      citeTitle: match[5],
    }
  },
  toBlock({ text, citeName, citeTitle, layout, color }) {
    return `<blockquote class="quote ${layout} ${color}"><p>${text}</p><footer><cite>- ${citeName}<br>${citeTitle}</cite></footer></blockquote>`
  },
  toPreview({ text, citeName, citeTitle, layout, color }) {
    return `<blockquote class="quote ${layout} ${color}"><p>${text}</p><footer><cite>- ${citeName}<br>${citeTitle}</cite></footer></blockquote>`
  },
}

export default BlockquoteComponent
