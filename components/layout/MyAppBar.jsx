import {
  Favorite,
  ManageAccounts,
  Menu as MenuIcon,
  ShoppingCart,
} from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { UserInfoDialog } from './UserInfoDialog';
import { useRouter } from 'next/router';

const MyAppBar = ({ handleDrawerToggle, loggedInUser }) => {
  const router = useRouter();
  const [cartLength, setCartLength] = useState(0);
  const [favLength, setFavLength] = useState(0);

  useEffect(async () => {
    const response1 = await fetch('http://localhost:3000/api/foods/cartLength');
    const cartL = await response1.json();
    setCartLength(cartL);
    const response2 = await fetch('http://localhost:3000/api/foods/favLength');
    const favL = await response2.json();
    setFavLength(favL);
  });

  const [open, setOpen] = useState(false);

  return (
    <AppBar
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1, display: { xs: 'block', sm: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h3"
          sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          Food Palace 2
        </Typography>
        <NextLink href="/shopping-cart">
          <a>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </a>
        </NextLink>
        <NextLink href="/favorites">
          <a>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={favLength} color="error">
                <Favorite />
              </Badge>
            </IconButton>
          </a>
        </NextLink>
        {loggedInUser.length !== 0 ? (
          <>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                setOpen(true);
              }}
            >
              <ManageAccounts fontSize="inherit" />
            </IconButton>
            <UserInfoDialog
              open={open}
              setOpen={setOpen}
              loggedInUser={loggedInUser}
            />
          </>
        ) : (
          <NextLink href="/sign-in">
            <a>
              <Button color="inherit">Login</Button>
            </a>
          </NextLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
