import Link from 'next/link'

import styles from './page.module.css'

import { Button, Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Stack spacing={4} alignItems='center'>
          <Typography sx={{ typography: { sm: 'h1', xs: 'h3' } }}>Tic-Tac-Toe</Typography>

          <Button
            variant='contained'
            size='large'
            component={Link}
            href='/1_player'
            fullWidth
          >
            1 Player
          </Button>

          <Button
            variant='contained'
            size='large'
            component={Link}
            href='/2_player'
            fullWidth
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
