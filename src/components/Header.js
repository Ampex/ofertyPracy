import React from 'react'
import { OutlinedInput, InputAdornment } from '@material-ui/core'

const inputProps = {
  maxLength: 21
}

const Header = props => {
  const { value, onChange } = props
  return (
    <div className='header center'>
      <OutlinedInput
        type='text'
        value={value}
        color='primary'
        onChange={onChange}
        inputProps={inputProps}
        startAdornment={
          <InputAdornment position='start'>I'am looking for</InputAdornment>
        }
        variant='outlined'
      />
    </div>
  )
}

export default Header
