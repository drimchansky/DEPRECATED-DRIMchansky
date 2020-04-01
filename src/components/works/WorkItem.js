import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import styles from './works.module.css'

import CalendarIcon from '../icons/CalendarIcon'
import LinkIcon from '../icons/LinkIcon'
import GitHubIcon from '../icons/GitHubIcon'

const WorkItem = ({ title, tags, url, githubUrl, imageUrl, html, date, tech }) => {
  return (
    <>
      <li className={styles.workItem} data-tech={tech}>
        <div className={styles.wrapper}>
          <h2
            className={styles.header}
            dangerouslySetInnerHTML={{ __html: title || '[Add title]' }}
          ></h2>
          <div className={styles.info}>
            <div className={styles.date}>
              <CalendarIcon />
              <span>{date || '[Add date]'}</span>
            </div>
            <div className={styles.url}>
              <LinkIcon />
              <a href={url}>Website</a>
            </div>
          </div>
          <ul className={styles.tags}>
            {tags.map((tag) => {
              return <li key={tag}>{tag}</li>
            })}
          </ul>
          <span className={styles.text} dangerouslySetInnerHTML={{ __html: html }}></span>
          <a className={styles.link} href={githubUrl}>
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <Img className={styles.image} fluid={imageUrl} />
      </li>
    </>
  )
}

WorkItem.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  url: PropTypes.string,
  githubUrl: PropTypes.string,
  imageUrl: PropTypes.object,
  html: PropTypes.string,
  date: PropTypes.string,
  tech: PropTypes.string,
}

export default WorkItem
