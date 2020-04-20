import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'
import EventIcon from '@material-ui/icons/Event'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { makeStyles } from '@material-ui/core/styles'

import styles from './works.module.css'

import CalendarIcon from '../icons/CalendarIcon'
import LinkIcon from '../icons/LinkIcon'

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'var(--c-accent)',
    borderColor: 'var(--c-accent)',
    alignSelf: 'flex-end',
    marginTop: '10px',
  },
}))

const WorkItem = ({ title, tags, url, githubUrl, imageUrl, html, date, tech }) => {
  const classes = useStyles()

  return (
    <>
      <li className={styles.workItem} data-tech={tech}>
        <div className={styles.wrapper}>
          <h2
            className={styles.header}
            dangerouslySetInnerHTML={{
              __html: title || '[Add title]',
            }}
          ></h2>
          <div className={styles.info}>
            <div className={styles.date}>
              <EventIcon />
              <span>{date || '[Add date]'}</span>
            </div>
            <div className={styles.url}>
              <ExitToAppIcon />
              <a href={url}>Website</a>
            </div>
          </div>
          <ul className={styles.tags}>
            {tags.map((tag) => {
              return <li key={tag}>{tag}</li>
            })}
          </ul>
          <span className={styles.text} dangerouslySetInnerHTML={{ __html: html }}></span>
          <Button
            className={classes.link}
            href={githubUrl}
            startIcon={<GitHubIcon />}
            size="large"
            variant="outlined"
          >
            GitHub
          </Button>
        </div>
        <Img className={styles.image} fluid={imageUrl} style={{ maxHeight: '100%' }} />
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
