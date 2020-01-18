import React from "react"

import pageStyles from "./Page.module.css"
import "../util/custom-normalize.css"
import "../util/properties.css"

const Page = props => {
  return (
    <>
      <div className={pageStyles.page}>
        <>{props.children}</>
      </div>
    </>
  )
}

export default Page
