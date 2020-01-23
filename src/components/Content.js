import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grow } from '@material-ui/core'
import data from '../jobs'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  Chip
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    maxWidth: 245
  },
  media: {
    height: 140
  },
  typo: {
    fontWeight: 700
  },
  list: {
    fontSize: 4
  },
  img: {
    height: 160,
    width: 'auto'
  }
})

const Content = props => {
  const classes = useStyles()
  const [isOpen, setOpen] = useState(false)
  const [isFill, setFill] = useState([])
  const [isAccept, setAccept] = useState(false)

  const handleClick = job => {
    setFill(job)
    setOpen(!isOpen)
  }

  const handleClose = () => {
    setOpen(!isOpen)
    setAccept(false)
  }
  const handleAccept = () => {
    setAccept(true)
  }

  const listing = props => {
    const list = props.map(e => <li key={e}>{e}</li>)
    return list
  }

  const jobList = data.map(job => (
    <div onClick={() => handleClick(job)} key={job.id} className='job'>
      <img
        className={classes.img}
        src={require(`../images/${job.url}`)}
        alt='job-img'
      />
      <div style={{ margin: '15px' }}>
        <Typography variant='h6'>{job.title}</Typography>
        <Typography display='block' variant='caption'>
          {job.location}
        </Typography>
        {job.skills.map(skill => (
          <Chip
            className='skill'
            variant='outlined'
            size='small'
            color='secondary'
            key={skill}
            label={skill}
            onClick={() => console.log()}
          />
        ))}
      </div>
    </div>
  ))

  return (
    <div className='content center'>
      {jobList}
      <Dialog disableBackdropClick open={isOpen} onClose={handleClose}>
        <DialogTitle>
          <strong>{isFill.title}</strong>
          <Grow in={isAccept}>
            <CheckCircleIcon
              color='primary'
              fontSize='large'
              className='iconCheck'
            />
          </Grow>
        </DialogTitle>
        {isOpen && (
          <div className='job-img'>
            <img src={require(`../images/${isFill.url}`)} alt='' />
          </div>
        )}
        <DialogContent>
          <Typography variant='h6'>Description</Typography>
          <Typography style={{ marginBottom: 10 }}>
            {isFill.description}
          </Typography>
          <Typography variant='h6'>Responsibility</Typography>
          <ul>{isOpen && listing(isFill.resp)}</ul>
          <Typography variant='h6'>Needs</Typography>
          <ul>{isOpen && listing(isFill.needs)}</ul>
          <Typography variant='h6'>Offer</Typography>
          <ul>{isOpen && listing(isFill.offer)}</ul>
        </DialogContent>

        <DialogActions>
          <Button variant='outlined' onClick={handleClose} color='secondary'>
            Cancel
          </Button>
          <Button
            onClick={handleAccept}
            variant='contained'
            color='primary'
            autoFocus
          >
            Apply Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Content
