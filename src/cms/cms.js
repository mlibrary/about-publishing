import CMS from "netlify-cms-app";

import "../css/main.css";

import BlockquoteComponent from "./components/blockquoteComponent";
import CalloutComponent from "./components/calloutComponent";

CMS.registerEditorComponent(BlockquoteComponent);
CMS.registerEditorComponent(CalloutComponent);