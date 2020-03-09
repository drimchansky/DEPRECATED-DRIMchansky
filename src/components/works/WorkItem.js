import React from 'react'
import Img from 'gatsby-image'

import styles from './works.module.css'

import CalendarIcon from '../icons/CalendarIcon'
import LinkIcon from '../icons/LinkIcon'

const WorkItem = ({ title, url, githubUrl, imageUrl, html, date }) => {
  return (
    <>
      <li className={styles.workItem}>
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        <div className={styles.date}>
          <CalendarIcon />
          <span>{date}</span>
        </div>
        <div className={styles.url}>
          <LinkIcon />
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
