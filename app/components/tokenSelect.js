import { tokens } from '../utils/tokens'

import { FormControl, InputLabel, MenuItem, Select, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'

import { styled } from '@mui/material/styles'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    width: 40,
    height: 40,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: 0,
      margin: 0,
      padding: 0
    },
    '&:first-of-type': {
      borderRadius: 0,
      margin: 0,
      padding: 0
    },
  },
  // border: 0,
  display: 'grid',
  'grid-template-columns': 'repeat(3, 40px)',
  'grid-template-rows': 'repeat(3, 40px)'
}));

const colors = ["none", "blue-green", "orange-pink", "coral", "purple", "yellow", "teal", "red", "blue"]

export default function TokenSelect({ token1, token2, handleToken1Select, handleToken2Select, isOver, pathname, tokenColor, handleTokenColor, token1Color, handleToken1Color, token2Color, handleToken2Color }) {
  const p1Label = pathname === "/1_player" ? "You" : "Player 1"
  const p2Label = pathname === "/1_player" ? "Opponent" : "Player 2"

  return (
    <Stack spacing={2} direction='row'>
      <Stack
        // justifyContent='center'
        // alignItems='center'
        width={200}
      >
        <Stack
          spacing={2}
          direction='row'
          width={200}
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

          {/* <FormControl fullWidth disabled={isOver}>
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
                    justifyContent: 'center',
                    background: `var(--${color})`,
                    '&:hover': {
                      // background: color !== 'none' ? alpha('rgb(0, 0, 0)', 0.5) : ''
                      background: `var(--${color})`,
                      opacity: 0.5
                    }
                  }}
                >
                  ㅤ
                </MenuItem>
              )}
            </Select>
          </FormControl> */}
        </Stack>

        <Stack
          spacing={2}
          direction='row'
          justifyContent='space-evenly'
          // width={200}
          sx={{ mb: 2, textAlign: 'center' }}
        >
          <input
            type='color'
            value={token1Color}
            onChange={handleToken1Color}
            style={{ width: 40, height: 40 }}
            disabled={isOver}
          />
          {console.log(token1Color)}

          <input
            type='color'
            value={token2Color}
            onChange={handleToken2Color}
            style={{ width: 40, height: 40 }}
            disabled={isOver}
          />
          {console.log(token2Color)}
        </Stack>
      </Stack>

      <StyledToggleButtonGroup
        value={tokenColor}
        exclusive
        onChange={handleTokenColor}
        disabled={isOver}
      >
        {colors.map((color) =>
          <ToggleButton
            key={color}
            value={color}
            sx={{
              background: `var(--${color})`,
              '&.Mui-selected': {
                background: `var(--${color})`,
                opacity: 0.5
              },
              '&:hover': {
                background: `var(--${color})`,
                opacity: 0.7
              },
              fontSize: '2rem'
            }}
          >
            {tokenColor === color ? '•' : 'ㅤ'}
          </ToggleButton>
        )}
      </StyledToggleButtonGroup>
    </Stack>
  )
}