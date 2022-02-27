import { Close } from '@mui/icons-material';
import { Alert, IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emptySignInSnack, emptySignUpSnack } from '../../features/usersSlice';

const MySnack = ({ snack }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    dispatch(emptySignUpSnack());
    dispatch(emptySignInSnack());
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      key={snack.id}
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
