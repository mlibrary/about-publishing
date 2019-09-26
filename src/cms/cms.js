import CMS from "netlify-cms-app"
import styles from "!css-loader!postcss-loader!../css/main.css"

import BlockquoteComponent from "./components/blockquoteComponent"
import CalloutComponent from "./components/calloutComponent"
import AdvancedImageComponent from "./components/advancedImageComponent"

import StoryPreview from "./preview-templates/storyPreview"

const fonts = "@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Muli&display=swap');"
CMS.registerPreviewStyle(fonts + styles.toString(), { raw: true })

CMS.registerEditorComponent(BlockquoteComponent)
CMS.registerEditorComponent(CalloutComponent)
CMS.registerEditorComponent(AdvancedImageComponent)

CMS.registerPreviewTemplate("stories", StoryPreview)
