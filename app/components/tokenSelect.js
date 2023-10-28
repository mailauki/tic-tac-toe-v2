import { tokens } from '../utils/tokens'

import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'

export default function TokenSelect({ token1, token2, handleToken1Select, handleToken2Select, isOver }) {
  return (
    <Stack
      spacing={2}
      direction='row'
      width='200px'
      sx={{ mb: 2, textAlign: 'center' }}
    >
      <FormControl fullWidth disabled={isOver}>
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

      <FormControl fullWidth disabled={isOver}>
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
  )
}