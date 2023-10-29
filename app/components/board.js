import styles from '../page.module.css'

import { Box, Button, Typography } from '@mui/material'

export default function Board({ board, handleAddToken, isOver, tokenColor }) {
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
          <Typography
            fontSize='8rem'
            align='center'
            className='token'
            sx={{
              background: tokenColor && tokenColor !== 'none' && token.name !== 'smile' ? `var(--${tokenColor})` : 'transparent',
              'background-clip': tokenColor && tokenColor !== 'none' && token.name !== 'smile' ? 'text' : 'unset',
              '-webkit-background-clip': tokenColor && tokenColor !== 'none' && token.name !== 'smile' ? 'text' : 'unset',
              color: tokenColor && tokenColor !== 'none' && token.name !== 'smile' ? 'transparent' : 'text.primary',
              '-webkit-text-fill-color': tokenColor && tokenColor !== 'none' && token.name !== 'smile' ? 'transparent' : 'text.primary',
            }}
          >
            {token.icon}
          </Typography>
        </Button>
      )}
    </Box>
  )
}