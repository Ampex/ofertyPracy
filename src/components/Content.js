import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import data from '../jobs'

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'

const jobList = data.map(job => (
  <div key={job.id} className='job'>
    <img width={60} height={60} src={`../images/${job.url}`} alt='job-img' />
    <p>{job.title}</p>
    <code style={{ backgroundColor: '#ececec', display: 'flex', padding: 6 }}>
      {job.time}
    </code>
    <p className='desc'>{job.description}</p>
  </div>
))

const useStyles = makeStyles({
  card: {
    maxWidth: 245
  },
  media: {
    height: 140
  }
})

export default function Content() {
  const classes = useStyles()
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='content center'>
      {jobList}
      {isOpen && (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} title='Some Title' image='' />
            <CardContent>
              <Typography variant='h2'>Lizard</Typography>
              <Typography variant='body2'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='secondary'>
              Lern More
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  )
}
