// packages
import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
// icons
import GitHubIcon from '@material-ui/icons/GitHub'
import EventIcon from '@material-ui/icons/Event'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { makeStyles } from '@material-ui/core/styles'
// styles
import styles from './WorkItem.module.css'

// overwrite MaterialUI
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
  const image = imageUrl ? (
    <Img className={styles.image} fluid={imageUrl} alt={`${title} image`} />
  ) : (
    ''
  )

  return (
    <>
      <li
        className={styles.workItem}
        data-tech={tech}
        // If image is absent set max-width
        style={{
          maxWidth: imageUrl ? '' : '700px',
        }}
      >
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
              <span>
                <i>Last modified: </i>
                {date || '[Add date]'}
              </span>
            </div>
          </div>
          <ul className={styles.tags}>
            {tags.map((tag) => {
              return <li key={tag}>{tag}</li>
            })}
          </ul>
          <span className={styles.text} dangerouslySetInnerHTML={{ __html: html }}></span>
          <div className={styles.buttonWrapper}>
            <Button
              disabled={githubUrl ? false : true}
              className={classes.link}
              href={githubUrl}
              startIcon={<GitHubIcon />}
              size="large"
              variant="outlined"
              style={{ marginRight: '10px' }}
            >
              GitHub
            </Button>
            <Button
              disabled={url ? false : true}
              className={classes.link}
              href={url}
              startIcon={<MeetingRoomIcon />}
              size="large"
              variant="outlined"
              target="_blank"
            >
              Website
            </Button>
          </div>
        </div>
        {image}
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
