import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'

import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew'

export default function Header({ handleReset, p1Wins, p2Wins, pathname }) {
  const matches = useMediaQuery('(max-width:600px)')

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

        <Box sx={{ position: 'absolute', left: 'calc(50% - 40.25px)' }}>
          <Button
            onClick={handleReset}
            variant='outlined'
            color='inherit'
          >
            Reset
          </Button>
        </Box>

        <Stack direction='row' spacing={2}>
          <Stack justifyContent='center' alignItems='center'>
            <Typography variant='h6'>{p1Wins}</Typography>
            <Typography variant='caption'>{pathname === "/1_player" ? "Wins" : matches ? "P1 Wins" : "Player 1 Wins"}</Typography>
          </Stack>
          <Stack justifyContent='center' alignItems='center'>
            <Typography variant='h6'>{p2Wins}</Typography>
            <Typography variant='caption'>{pathname === "/1_player" ? "Losses" : matches ? "P2 Wins" : "Player 2 Wins"}</Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}