import { Close } from '@mui/icons-material';
import { Alert, IconButton, Snackbar } from '@mui/material';

const MySnack = ({ snack, open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Close fontSize="small" />
        </IconButton>
      }
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={snack.severity}
        sx={{ width: '100%' }}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );
};

export default MySnack;
