const AdvancedImageComponent = {
  id: "advancedImage",
  label: "Advanced Image",
  fields: [
    { name: "image", label: "Image", widget: "image" },
    { name: "alt", label: "Alt text", widget: "string", default: "" },
    {
      name: "alignment",
      label: "Alignment",
      widget: "select",
      default: "none",
      options: [
        { label: "None", value: "none" },
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
    },
    { name: "caption", label: "Caption", widget: "string", default: "" },
    { name: "credit", label: "Credit", widget: "string", default: "" },
  ],
  pattern: /^<figure class="advanced-image (.*)"><img src="(.*)" alt="(.*)"><figcaption><div class="caption">(.*)<\/div><div class="credit">(.*)<\/div><\/figcaption><\/figure>/,
  fromBlock(match) {
    return {
      image: match[2],
      alt: match[3],
      alignment: match[1],
      caption: match[4],
      credit: match[5],
    }
  },
  toBlock(obj) {
    return `<figure class="advanced-image ${obj.alignment}"><img src="${obj.image}" alt="${obj.alt}"><figcaption><div class="caption">${obj.caption}</div><div class="credit">${obj.credit}</div></figcaption></figure>`
  },
}

export default AdvancedImageComponent
