import React from 'react'
import { Chip } from '@material-ui/core'

const tags = ['javaScript', 'React', 'Developer', 'FullStack']

const render = tags.map(tag => (
  <Chip
    variant='outlined'
    color='primary'
    className='tag'
    key={tag}
    label={tag}
  />
))

const Tag = () => {
  return <div className='center tag'>{render}</div>
}

export default Tag
