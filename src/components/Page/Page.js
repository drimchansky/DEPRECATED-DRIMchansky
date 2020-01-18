import React, { useState } from 'react'

import SiteMetadata from '../SiteMetadata'
import Sidebar from '../Sidebar/Sidebar'

import styles from './Page.module.css'
import '../../util/custom-normalize.css'
import '../../util/properties.css'
import '../../util/fonts.css'
import '../../util/utility.css'

const Page = props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SiteMetadata />
      <div className={styles.page}>
        <Sidebar />
        <>{props.children}</>
      </div>
    </>
  )
}

export default Page
