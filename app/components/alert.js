import Link from 'next/link'

import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Snackbar } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'


export default function Alert({ alert, handleAlertClose, handleReset, isOver, loading, error }) {
  const closeBtn = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleAlertClose}
    >
      <CloseIcon fontSize='small' />
    </IconButton>
  )

  const backBtn = (
    <Button
      size='small'
      aria-label='back'
      color='inherit'
      variant='outlined'
      component={Link}
      href='/'
    >
      Back
    </Button>
  )

  const playAgainBtn = (
    <Button
      variant='contained'
      size='large'
      onClick={handleReset}
    >
      Play Again
    </Button>
  )

  return (
    <>
      <Dialog
        open={alert && !error}
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle textAlign='center'>{loading ? "Opponent Thinking..." : alert}</DialogTitle>
        <DialogContent>
          <DialogContentText textAlign='center' sx={{ mt: 1 }}>
            {loading ? <CircularProgress color='inherit' size={60} /> : null}
            {isOver ? playAgainBtn : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {isOver ? backBtn : null}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={error}
        onClose={handleAlertClose}
        autoHideDuration={error ? 3000 : null}
        message={alert}
        action={closeBtn}
      />
    </>
  )
}