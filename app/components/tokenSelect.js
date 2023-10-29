import { useState } from 'react'

import { tokens } from '../utils/tokens'

import { styled } from '@mui/material/styles'

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Menu, MenuItem, MenuList, Select, Stack, Switch, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
  display: 'grid',
  'grid-template-columns': 'repeat(3, 40px)',
  'grid-template-rows': 'repeat(3, 40px)'
}));

const colors = ["none", "blue-green", "orange-pink", "coral", "purple", "yellow", "teal", "red", "blue"]

export default function TokenSelect({ token1, token2, handleToken1Select, handleToken2Select, isOver, pathname, tokenColor, handleTokenColor, token1Color, handleToken1Color, token2Color, handleToken2Color, token1ColorOn, handleToken1ColorSwitch, token2ColorOn, handleToken2ColorSwitch, tokenEditOpen, handleTokenEdit }) {
  const p1Label = pathname === "/1_player" ? "You" : "Player 1"
  const p2Label = pathname === "/1_player" ? "Opponent" : "Player 2"
  const [anchorEl, setAnchorEl] = useState(null)

  function handleEditOpen(event) {
    setAnchorEl(event.currentTarget)
    handleTokenEdit()
  }

  return (
    <Box sx={{ m: 2 }}>
      <Button onClick={handleEditOpen}>Edit Player Tokens</Button>

      <Menu
        open={tokenEditOpen}
        onClose={handleTokenEdit}
        disabled={isOver}
        anchorEl={anchorEl}
      >
        <Stack direction='row' spacing={2} sx={{ p: 2 }}>
          <Stack direction='column' spacing={2} width={100}>
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

            <TextField
              type='color'
              value={token1Color}
              onChange={handleToken1Color}
              disabled={isOver}
              label='P1 Color'
              fullWidth
            />
          </Stack>
        
          <Stack direction='column' spacing={2} width={100}>
            <FormControl fullWidth disabled={isOver}>
              <InputLabel id="token-2-select-label">{p2Label}</InputLabel>
              <Select
                value={token2.name}
                onChange={handleToken2Select}
                label={p2Label}
              >
                {tokens.map((token) => 
                  <MenuItem
                    key={`2_${token.name}`}
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

            <TextField
              type='color'
              value={token2Color}
              onChange={handleToken2Color}
              disabled={isOver}
              label='P2 Color'
              fullWidth
            />
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
      </Menu>
    </Box>
  )
}