import CMS from "netlify-cms-app"

import "../css/main.css"

import BlockquoteComponent from "./components/blockquoteComponent"
import CalloutComponent from "./components/calloutComponent"
import AdvancedImageComponent from "./components/advancedImageComponent"

CMS.registerEditorComponent(BlockquoteComponent)
CMS.registerEditorComponent(CalloutComponent)
CMS.registerEditorComponent(AdvancedImageComponent)
