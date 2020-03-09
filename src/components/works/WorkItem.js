import React from 'react'
import Img from 'gatsby-image'

import styles from './works.module.css'

const WorkItem = ({ title, url, githubUrl, imageUrl, html, date }) => {
  return (
    <>
      <li className={styles.workItem}>
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        <div className={styles.date}>
          <div>image placeholder</div>
          <span>{date}</span>
        </div>
        <div className={styles.url}>
          <div>image placeholder</div>
          <a href={url}>Website</a>
        </div>
        <a href={githubUrl}>GitHub</a>
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
        <Img className={styles.image} fluid={imageUrl} />
      </li>
    </>
  )
}

export default WorkItem
