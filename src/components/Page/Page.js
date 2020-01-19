import React, { useState } from 'react'

import SiteMetadata from '../SiteMetadata'
import Sidebar from '../Sidebar/Sidebar'
import Hamburger from '../../components/Hamburger/Hamburger'

import styles from './Page.module.css'
import '../../util/custom-normalize.css'
import '../../util/properties.css'
import '../../util/fonts.css'
import '../../util/utility.css'

const Page = props => {
  // hamburger state
  const [active, setActive] = useState(false)

  return (
    <>
      <SiteMetadata />
      <div className={styles.page}>
        <Hamburger active={active} setActive={setActive} />
        <Sidebar active={active} setActive={setActive} />
        <>{props.children}</>
      </div>
    </>
  )
}

export default Page
