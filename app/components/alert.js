import { Backdrop, CircularProgress, IconButton, Snackbar } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

export default function Alert({ alert, handleAlertClose, isOver, loading }) {
  const closeBtn = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleAlertClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  )

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      
      <Snackbar
        open={alert ? true : false}
        onClose={() => loading ? null : handleAlertClose()}
        autoHideDuration={!isOver ? 4000 : null}
        message={alert}
        action={isOver || loading ?  null : closeBtn}
      />
    </>
  )
}