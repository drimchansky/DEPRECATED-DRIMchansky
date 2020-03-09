import React from 'react'
import Img from 'gatsby-image'

import styles from './works.module.css'

import CalendarIcon from '../icons/CalendarIcon'
import LinkIcon from '../icons/LinkIcon'
import GitHubIcon from '../icons/GitHubIcon'

const WorkItem = ({ title, tags, url, githubUrl, imageUrl, html, date, tech }) => {
  return (
    <>
      <li className={styles.workItem} data-tech={tech}>
        <h2 className={styles.header} dangerouslySetInnerHTML={{ __html: title }}></h2>
        <div className={styles.info}>
          <div className={styles.date}>
            <CalendarIcon />
            <span>{date}</span>
          </div>
          <div className={styles.url}>
            <LinkIcon />
            <a href={url}>Website</a>
          </div>
        </div>
        <ul className={styles.tags}>
          {tags.map(tag => {
            return <li>{tag}</li>
          })}
        </ul>
        <span className={styles.text} dangerouslySetInnerHTML={{ __html: html }}></span>
        <a className={styles.link} href={githubUrl}>
          <GitHubIcon />
          GitHub
        </a>

        <Img className={styles.image} fluid={imageUrl} />
      </li>
    </>
  )
}

export default WorkItem
