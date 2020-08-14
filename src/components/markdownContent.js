import React from "react"
import PropTypes from "prop-types"
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

const MarkdownContent = ({ content, className }) => (
  <span
    className={className}
    dangerouslySetInnerHTML={{ __html: md.render(content) }}
  />
)

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default MarkdownContent
