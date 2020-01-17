import React from 'react'
import { Link } from '@material-ui/core'

const Footer = () => {
  return (
    <div className='footer center'>
      © 2020{' '}
      <Link style={{ marginLeft: 5 }} href='https://github.com/Ampex'>
        bkasperski
      </Link>
    </div>
  )
}

export default Footer
