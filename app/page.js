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
