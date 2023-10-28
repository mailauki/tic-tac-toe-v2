import styles from '../page.module.css'


import { Box, Button, ButtonBase, Card, CardActionArea, CardContent, IconButton, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  bgcolor: theme.palette.background.paper,
  '&:hover': {
    bgcolor: theme.palette.action.hover
  },
}));

export default function Board({ board, handleAddToken, isOver }) {
  return (
    // <Box className={styles.board}>
    //   <Box
    //     className={styles.tile}
    //     component={Button}
    //     variant='contained'
    //     sx={{
    //       borderRadius: 0,
    //       boxShadow: 'none',
    //       '&:hover': {
    //         boxShadow: 'none',
    //       }
    //     }}
    //   ></Box>
    //   <Button
    //     className={styles.tile}
    //     variant='contained'
    //     color='background'
    //     sx={{
    //       borderRadius: 0,
    //       boxShadow: 'none',
    //       '&:hover': {
    //         boxShadow: 'none',
    //       }
    //     }}
    //   ></Button>
    //   <Button
    //     className={styles.tile}
    //     variant='text'
    //     sx={{
    //       borderRadius: 0,
    //       boxShadow: 'none',
    //       '&:hover': {
    //         boxShadow: 'none',
    //       }
    //     }}
    //   ></Button>
    //   <Button
    //     className={styles.tile}
    //     variant='contained'
    //     color='info'
    //     sx={{
    //       borderRadius: 0,
    //       boxShadow: 'none',
    //       '&:hover': {
    //         boxShadow: 'none',
    //       }
    //     }}
    //   ></Button>
    // </Box>
    // <Paper className={styles.board} variant='outlined' elevation={1} square>
    //   <Button
    //     variant='contained'
    //     className={styles.tile}
    //     disableElevation
    //     sx={{
    //       borderRadius: 0
    //     }}
    //   ></Button>
    //   <Button className={styles.tile}></Button>
    //   <Paper className={styles.tile} variant='outlined' square>
    //     <CardActionArea></CardActionArea>
    //   </Paper>
    //   <CardActionArea>
    //     <Paper className={styles.tile} elevation={0} square>
    //       <p className={styles.token}>😀</p>
    //     </Paper>
    //   </CardActionArea>
    // </Paper>
    <Box className={styles.board} sx={{ bgcolor: 'text.disabled' }}>
      {board.map((token, index) => 
        // <CardActionArea
        //   key={index}
        //   onClick={() => handleAddToken(index)}
        //   disabled={isOver}
        // >
        //   <Paper className={styles.tile} elevation={0} square>
        //     <p className={styles.token}>{token.icon}</p>
        //   </Paper>
        // </CardActionArea>
        // <Paper
        //   key={index}
        //   className={styles.tile}
        //   elevation={0}
        //   square
        //   component={Button}
        //   // variant='contained'
        //   // component={CardActionArea}
        //   onClick={() => handleAddToken(index)}
        //   disabled={isOver}
        //   sx={{
        //     borderRadius: 0,
        //     bgcolor: 'background.paper',
        //     '&:hover': {
        //       // backgroundColor: 'rgba(0, 0, 0, 0.02)'
        //       backgroundColor: 'action.hover'
        //     }
        //   }}
        // >
        //   <p className={styles.token}>{token.icon}</p>
        // </Paper>
        <Button
          key={index}
          className={styles.tile}
          onClick={() => handleAddToken(index)}
          disabled={isOver}
          variant='contained'
          color='tile'
          disableElevation
          // sx={{ borderRadius: 0, '&:disabled': { bgcolor: '#eee' } }}
          sx={{ borderRadius: 0 }}
        >
          <p className={styles.token}>{token.icon}</p>
        </Button>
        // <ImageButton key={index} className={styles.tile}>
        //   <p className={styles.token}>{token.icon}</p>
        // </ImageButton>
        // <Card
        //   key={index}
        //   className={styles.tile}
        //   square
        // >
        //   <CardActionArea
        //     onClick={() => handleAddToken(index)}
        //     disabled={isOver}
        //     sx={{
        //       height: '100%'
        //     }}
        //   >
        //     <CardContent>
        //       <p className={styles.token}>{token.icon}</p>
        //     </CardContent>
        //   </CardActionArea>
        // </Card>
        // <Button
        //   key={index}
        //   variant='contained'
        //   className={styles.tile}
        //   onClick={() => handleAddToken(index)}
        //   disabled={isOver}
        // >
        //   <p className={styles.token}>{token.icon}</p>
        // </Button>
      )}
    </Box>
    // <Box className={styles.board}>
    //   {board.map((token, index) => 
    //     <Box
    //       key={index}
    //       component={Button}
    //       variant='contained'
    //       // variant='text'
    //       onClick={() => handleAddToken(index)}
    //       disabled={isOver}
    //       className={styles.tile}
    //       // color='secondary'
    //       sx={{
    //         borderRadius: 0,
    //         boxShadow: 'none',
    //         '&:hover': {
    //           boxShadow: 'none',
    //         }
    //       }}
    //     >
    //       <p className={styles.token}>{token.icon}</p>
    //     </Box>
    //   )}
    // </Box>
  )
}