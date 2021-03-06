import React from 'react';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Button, DialogContent, IconButton } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { logout } from '../../features/usersSlice';
import { useRouter } from 'next/router';

export function UserInfoDialog({ open, setOpen, loggedInUser }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 5,
          overflowX: 'hidden',
        }}
      >
        <Avatar sx={{ width: 66, height: 66, mb: 1, bgcolor: 'orange' }}>
          {loggedInUser.firstName[0]}
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0 }}>
          {`${loggedInUser.firstName} ${loggedInUser.lastName}`}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {loggedInUser.email}
        </Typography>
        <div style={{ margin: '10px 10px 0' }}>
          <IconButton
            onClick={() => {
              router.push('/favorites');
              setOpen(false);
            }}
            size="large"
          >
            <Favorite fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={() => {
              router.push('/shopping-cart');
              setOpen(false);
            }}
            size="large"
          >
            <ShoppingCart fontSize="inherit" />
          </IconButton>
        </div>
        <Button
          variant="contained"
          color="secondary"
          sx={{ m: 2 }}
          fullWidth
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
        {loggedInUser.isAdmin && (
          <Button
            variant="contained"
            onClick={() => {
              router.push('/admin-panel');
              setOpen(false);
            }}
            fullWidth
          >
            Go to admin panel
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
}
