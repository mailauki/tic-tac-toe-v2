import { tokens } from '../utils/tokens'

import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'

export default function TokenSelect({ token1, token2, handleToken1Select, handleToken2Select, isOver, pathname, tokenColor, handleTokenColor }) {
  const p1Label = pathname === "/1_player" ? "You" : "Player 1"
  const p2Label = pathname === "/1_player" ? "Opponent" : "Player 2"

  const colors = ["none", "blue-green", "orange-pink", "yellow", "coral", "teal", "red"]

  return (
    <Stack
      spacing={2}
      direction='row'
      width={340}
      sx={{ mb: 2, textAlign: 'center' }}
    >
      <FormControl fullWidth disabled={isOver}>
        <InputLabel id="token-1-select-label">{p1Label}</InputLabel>
        <Select
          value={token1.name}
          onChange={handleToken1Select}
          label={p1Label}
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

      <FormControl fullWidth disabled={isOver}>
        <InputLabel id="token-2-select-label">{p2Label}</InputLabel>
        <Select
          value={token2.name}
          onChange={handleToken2Select}
          label={p2Label}
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

      <FormControl fullWidth disabled={isOver}>
        <InputLabel id="token-2-select-label">Token Color</InputLabel>
        <Select
          value={tokenColor}
          onChange={handleTokenColor}
          label='TokenColor'
        >
          {colors.map((color) => 
            <MenuItem
              key={`${color}`}
              value={color}
              sx={{ 
                justifyContent: 'center' 
              }}
            >
              {color}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Stack>
  )
}