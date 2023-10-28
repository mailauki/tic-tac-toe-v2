import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function Alert({ alert, handleAlertClose, isOver }) {
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
    <Snackbar
      open={alert ? true : false}
      onClose={handleAlertClose}
      autoHideDuration={!isOver ? 4000 : null}
      message={alert}
      action={!isOver ? closeBtn : null}
    />
  )
}