import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../images/brand-logo.svg'
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import WorkIcon from '@material-ui/icons/Work'
import EmailIcon from '@material-ui/icons/Email'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled'
import PublishIcon from '@material-ui/icons/Publish'

const useStyles = makeStyles({
  list: {
    width: 250
  }
})

export default function Branding() {
  const classes = useStyles()
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='branding space'>
      <img height='auto' width='120px' src={logo} alt='logo' />

      <IconButton onClick={() => setOpen(true)} color='primary'>
        <MenuIcon color='secondary' />
      </IconButton>

      <Drawer anchor='right' open={isOpen} onClose={() => setOpen(false)}>
        <div onClick={() => setOpen(false)} className={classes.list}>
          <List>
            {[
              { id: <WorkIcon />, text: 'Go Work' },
              { id: <EmailIcon />, text: 'Message me' },
              { id: <FingerprintIcon />, text: 'Scan your finder' },
              { id: <PhoneEnabledIcon />, text: 'Call me' },
              { id: <PublishIcon />, text: 'Send work' }
            ].map((icon, index) => (
              <ListItem key={index} button>
                <ListItemIcon>{icon.id}</ListItemIcon>
                <ListItemText primary={icon.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}
