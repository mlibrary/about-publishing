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
      default: "md:float-left md:mr-8 mb-4 -ml-32",
      options: [
        { label: "Left", value: "md:float-left md:mr-8 mb-4 -ml-32" },
        { label: "Right", value: "md:float-right md:ml-8 mb-4 -mr-32" },
      ],
    },
    { name: "caption", label: "Caption", widget: "string", default: "" },
    { name: "credit", label: "Credit", widget: "string", default: "" },
  ],
  pattern: /^<figure class="advanced-image max-w-336 (.*)"><img class="w-full" src="(.*)" alt="(.*)"><figcaption class="text-xs text-slate-grey mt-2">(.*)<div class="mb-2">(.*)<\/div><div class="w-40 h-1 bg-michigan-blue"><\/div><\/figcaption><\/figure>/,
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
    return `<figure class="advanced-image max-w-336 ${obj.alignment}"><img class="w-full" src="${obj.image}" alt="${obj.alt}"><figcaption class="text-xs text-slate-grey mt-2">${obj.caption}<div class="mb-2">${obj.credit}</div><div class="w-40 h-1 bg-michigan-blue"></div></figcaption></figure>`
  },
}

export default AdvancedImageComponent
