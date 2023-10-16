// 'use client'

// import { useState } from 'react'
import Link from 'next/link'

import styles from './page.module.css'

// import { tokens } from './utils/tokens'

// import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Button, Stack, Typography } from '@mui/material'

export default function Home() {
  // const [token, setToken] = useState("");

  // function handleTokenSelect(event) {
  //   setToken(event.target.value);
  //   console.log(event.target.value);
  // }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <Stack spacing={2} direction='row' width='100%'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Player 1</InputLabel>
            <Select value={token} onChange={handleTokenSelect} label="Player 1">
              {tokens.map((token) => <MenuItem key={token.name} value={token.name}>{token.icon}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Player 2</InputLabel>
            <Select value={token} onChange={handleTokenSelect} label="Player 2">
              {tokens.map((token) => <MenuItem key={token.name} value={token.name}>{token.icon}</MenuItem>)}
            </Select>
          </FormControl>
        </Stack> */}
      </div>

      <div className={styles.center}>
        {/* <div className={styles.board}>
        {[...Array(9)].map((_, index) => <div key={index} className={styles.tile}>{tokens.find((element) => element.name === token).icon}</div>)}
        </div> */}
        <Stack spacing={4} alignItems='center'>
          <Typography variant='h1'>Tic-Tac-Toe</Typography>

          <Button
            variant='contained'
            size='large'
            component={Link}
            href='/1_player'
          >
            1 Player
          </Button>

          <Button
            variant='contained'
            size='large'
            component={Link}
            href='/2_player'
            disabled
          >
            2 Players
          </Button>
        </Stack>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  )
}
