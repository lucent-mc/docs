import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

import "iconify-icon"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const icon = fileData.frontmatter?.icon
  if (title) {
    return (
      <h1 class={classNames(displayClass, "article-title")}>
        {icon ? <iconify-icon width='1em' height='1em' icon={icon}></iconify-icon> : ""}
        {title}
      </h1>
    )
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
