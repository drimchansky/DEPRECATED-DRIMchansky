import React from "react"

import SiteMetadata from "../SiteMetadata"

import pageStyles from "./Page.module.css"
import "../../util/custom-normalize.css"
import "../..//util/properties.css"

const Page = props => {
  return (
    <>
      <SiteMetadata />
      <div className={pageStyles.page}>
        <>{props.children}</>
      </div>
    </>
  )
}

export default Page
