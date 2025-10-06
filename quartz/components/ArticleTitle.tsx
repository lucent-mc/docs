import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

import { Icon } from "@iconify/react"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const icon = fileData.frontmatter?.icon
  if (title) {
    return (
      <h1 class={classNames(displayClass, "article-title")}>
        {icon ? <Icon icon={icon} width="1.5rem" height="1.5rem" /> : ""}
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
