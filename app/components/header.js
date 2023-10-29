import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'

export default function Header({ handleReset, wins }) {
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

        <Button
          onClick={handleReset}
          variant='outlined'
          color='inherit'
        >
          Reset
        </Button>

        <Typography variant='h6'>{wins}</Typography>
      </Toolbar>
    </AppBar>
  )
}