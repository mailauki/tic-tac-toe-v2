import styles from '../page.module.css'


import { Box, Button } from '@mui/material'

export default function Board({ board, handleAddToken }) {
  return (
    <Box className={styles.board}>
      {board.map((token, index) => 
        <Box
          key={index}
          component={Button}
          variant='contained'
          onClick={() => handleAddToken(index)}
          className={styles.tile}
          sx={{
            borderRadius: 0,
            boxShadow: 'none',
            // backgroundColor: 'primary.dark',
            '&:hover': {
              // backgroundColor: 'primary.main',
              // opacity: [0.9, 0.8, 0.7],
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