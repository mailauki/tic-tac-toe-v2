'use client'

import { useState } from 'react'

import styles from '../page.module.css'

import { tokens } from '../utils/tokens'

import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Stack } from '@mui/material';

export default function Home() {
  const [token1, setToken1] = useState({ name: "X", icon: "❌" });
  const [token2, setToken2] = useState({ name: "O", icon: "⭕"});

  function handleToken1Select(event) {
    setToken1(tokens.find((token) => token.name === event.target.value));
  }

  function handleToken2Select(event) {
    setToken2(tokens.find((token) => token.name === event.target.value));
  }

  return (
    <main className={styles.main}>
      {/* <Stack spacing={2} direction='row' width='100%'>
        <FormControl fullWidth>
          <InputLabel id="token-1-select-label">Player 1</InputLabel>
          <Select
            value={token1.name}
            onChange={handleToken1Select}
            label="Player 1"
          >
            {tokens.map((token) => 
              <MenuItem
                key={`1_${token.name}`}
                value={token.name}
              >
                {token.icon}
              </MenuItem>
            )}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="token-2-select-label">Player 2</InputLabel>
          <Select
            value={token2.name}
            onChange={handleToken2Select}
            label="Player 2"
          >
            {tokens.map((token) => 
              <MenuItem
                key={`1_${token.name}`}
                value={token.name}
                sx={{ display: token.icon === '_' ? 'none' : '' }}
              >
                {token.icon}
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Stack> */}

      <Grid container spacing={2} className={styles.board} alignItems='stretch'>
        {[...Array(9)].map((_, index) => 
          <Grid
            item
            key={index}
            xs={4}
          >
            <Box
              className={styles.tile}
              sx={{
                color: token1.icon === '_' ? 'transparent' : 'inherit',
                width: '100%',
                height: '100%',
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p className={styles.token}>{token1.icon}</p>
            </Box>
          </Grid>
        )}
      </Grid>
    </main>
  )
}