const CalloutComponent = {
  id: "callout",
  label: "Callout",
  fields: [{ name: "text", label: "Text", widget: "markdown" }],
  pattern: /^<div class="lg:float-right lg:-mr-64 lg:w-3\/5 border-l-8 border-sea-blue px-6 pt-6 ml-6 mb-4" markdown="1">(.*)<\/div>/,
  fromBlock(match) {
    return {
      text: match[1],
    }
  },
  toBlock({ text }) {
    return `<div class="lg:float-right lg:-mr-64 lg:w-3/5 border-l-8 border-sea-blue px-6 pt-6 ml-6 mb-4" markdown="1">${text}</div>`
  },
  toPreview({ text }) {
    return `<div class="lg:float-right lg:-mr-64 lg:w-3/5 border-l-8 border-sea-blue px-6 pt-6 ml-6 mb-4" markdown="1">${text}</div>`
  },
}

export default CalloutComponent
