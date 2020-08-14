const LinkedImageComponent = {
  id: "linkedImage",
  label: "Linked Image",
  fields: [
    { name: "image", label: "Image", widget: "image" },
    { name: "link", label: "Link" },
    { name: "text", label: "Text" },
  ],
  pattern: /^<div class="lg:float-right lg:-mr-64 lg:w-3\/5 border-l-8 border-sea-blue px-6 pt-6 ml-6 mb-4"><a href="(.*)"><img class="mb-4" src="(.*)"><p>(.*)<\/p><\/a><\/div>/,
  fromBlock(match) {
    return {
      link: match[1],
      image: match[2],
      text: match[3],
    }
  },
  toBlock({ image, link, text }) {
    return `<div class="lg:float-right lg:-mr-64 lg:w-3/5 border-l-8 border-sea-blue px-6 pt-6 ml-6 mb-4"><a href="${link}"><img class="mb-4" src="${image}"><p>${text}</p></a></div>`
  },
}

export default LinkedImageComponent
