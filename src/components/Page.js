import React from "react"

import pageStyles from "./Page.module.css"

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
