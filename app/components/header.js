import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'

export default function Header({ wins }) {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color='inherit'
          component={Link}
          href='/'
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant='h6'>{wins}</Typography>
      </Toolbar>
    </AppBar>
  )
}