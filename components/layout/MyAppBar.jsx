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
import { useState } from 'react';
import { UserInfoDialog } from './UserInfoDialog';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const MyAppBar = ({ handleDrawerToggle, loggedInUser }) => {
  const router = useRouter();
  const cart = useSelector((state) => state.foods.cart);
  const favorites = useSelector((state) => state.foods.favorites);

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
              <Badge badgeContent={cart.length} color="error">
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
              <Badge badgeContent={favorites.length} color="error">
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
