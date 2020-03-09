import React from 'react'
import Img from 'gatsby-image'

import styles from './WorkItem.module.css'

const WorkItem = ({ title, imageUrl, id }) => {
  return (
    <>
      <li className={styles.workItem} key={id}>
        <div className={styles.infoWrapper}>
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <Img className={styles.image} fluid={imageUrl} />
      </li>
    </>
  )
}

export default WorkItem
