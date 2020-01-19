import React, { useState, useLayoutEffect } from 'react'

import SiteMetadata from '../SiteMetadata'
import Sidebar from '../Sidebar/Sidebar'
import Hamburger from '../../components/Hamburger/Hamburger'
import Toggl from '../../components/Toggl/Toggl'

import styles from './Page.module.css'
import '../../util/custom-normalize.css'
import '../../util/properties.css'
import '../../util/fonts.css'
import '../../util/utility.css'

const Page = props => {
  //check theme
  useLayoutEffect(() => {
    const darkMode = localStorage.getItem('darkMode')
    const body = document.body
    if (darkMode === 'enabled') {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  })

  // hamburger state
  const [active, setActive] = useState(false)

  return (
    <>
      <SiteMetadata />
      <div className={styles.page}>
        <Hamburger active={active} setActive={setActive} />
        <Sidebar active={active} setActive={setActive} />
        <>{props.children}</>
        <Toggl />
      </div>
    </>
  )
}

export default Page
