'use client'

import { useState } from 'react'

import styles from '../page.module.css'

import { tokens } from '../utils/tokens'

import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'

export default function Home() {
  const [token1, setToken1] = useState({ name: "X", icon: "❌" });
  const [token2, setToken2] = useState({ name: "O", icon: "⭕"});

  function handleToken1Select(event) {
    setToken1(tokens.find((token) => token.name === event.target.value));
  }

  function handleToken2Select(event) {
    setToken2(tokens.find((token) => token.name === event.target.value));
  }

  const emptyBoard = [...Array(9)].map((token) => token = tokens[0])
  const [board, setBoard] = useState(emptyBoard)
  const newBoard = [...board]

  function handleAddToken(index) {
    newBoard.splice([index], 1, token1)
    setBoard(newBoard)
  }

  return (
    <main className={styles.main}>
      <Stack
        spacing={2}
        direction='row'
        width='200px'
        sx={{ mb: 2, textAlign: 'center' }}
      >
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
                sx={{
                  display: token.icon === 'ㅤ' ? 'none' : '', 
                  justifyContent: 'center' 
                }}
                disabled={token.name === token2.name}
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
                sx={{
                  display: token.icon === 'ㅤ' ? 'none' : '', 
                  justifyContent: 'center' 
                }}
                disabled={token.name === token1.name}
              >
                {token.icon}
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Stack>

      <Box className={styles.board}>
        {newBoard.map((token, index) => 
          <Box
            key={index}
            component={Button}
            onClick={() => handleAddToken(index)}
            className={styles.tile}
            sx={{
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              }
            }}
          >
            <p className={styles.token}>{token.icon}</p>
          </Box>
        )}
      </Box>
    </main>
  )
}