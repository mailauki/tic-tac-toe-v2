import { useState, useMemo } from 'react'
import styles from '../page.module.css'
import useMediaQuery from '@mui/material/useMediaQuery'

import { Box, Button, Typography } from '@mui/material'

function Token({ token, tokenColor, token1, token2, token1Color, token2Color }) {
  const matches = useMediaQuery('(max-width:600px)')
  
  const [clipBG, setClipBG] = useState('transparent')
  const [clipText, setClipText] = useState('unset')
  const [clipColor, setClipColor] = useState('text.primary')

  useMemo(() => {
    if(tokenColor && tokenColor !== 'none' && token.name !== 'smile') {
      setClipBG(`var(--${tokenColor})`)
      setClipText('text')
      setClipColor('transparent')
    }
    else if (tokenColor === 'none') {
      setClipBG('transparent')
      setClipText('unset')
      setClipColor('text.primary')
    }
    else if (token1Color && token === token1 && token.name !== 'smile') {
      setClipBG(token1Color)
      setClipText('text')
      setClipColor('transparent')
    }
    else if (token2Color && token === token2 && token.name !== 'smile') {
      setClipBG(token2Color)
      setClipText('text')
      setClipColor('transparent')
    }
    else {
      setClipBG('transparent')
      setClipText('unset')
      setClipColor('text.primary')
    }
  },[token, token1, token1Color, token2, token2Color, tokenColor])

  return (
    <Typography
      fontSize={ matches ? '20vw' : '8rem'}
      align='center'
      className='token'
      sx={{
        background: clipBG,
        'background-clip': clipText,
        '-webkit-background-clip': clipText,
        color: clipColor,
        '-webkit-text-fill-color': clipColor,
      }}
    >
      {token.icon}
    </Typography>
  )
}

export default function Board({ board, handleAddToken, isOver, tokenColor, token1, token2, token1Color, token2Color }) {

  return (
    <Box className={styles.board} sx={{ bgcolor: 'text.disabled' }}>
      {board.map((token, index) =>
        <Button
          key={index}
          className={styles.tile}
          onClick={() => handleAddToken(index)}
          disabled={isOver}
          variant='contained'
          color='tile'
          disableElevation
          sx={{ borderRadius: 0 }}
        >
          <Token
            token={token}
            tokenColor={tokenColor}
            token1={token1}
            token1Color={token1Color}
            token2={token2}
            token2Color={token2Color}
          />
        </Button>
      )}
    </Box>
  )
}