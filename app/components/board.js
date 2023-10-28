import styles from '../page.module.css'


import { Box, Button } from '@mui/material'

export default function Board({ board, handleAddToken, isOver }) {
  return (
    <Box className={styles.board}>
      {board.map((token, index) => 
        <Box
          key={index}
          component={Button}
          variant='contained'
          onClick={() => handleAddToken(index)}
          disabled={isOver}
          className={styles.tile}
          sx={{
            borderRadius: 0,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            }
          }}
        >
          <p className={styles.token}>{token.icon}</p>
        </Box>
      )}
    </Box>
  )
}