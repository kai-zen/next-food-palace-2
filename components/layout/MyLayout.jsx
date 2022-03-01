import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { amber, red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import MyDrawer from './Drawer/MyDrawer';
import MyAppBar from './MyAppBar';

const MyLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMode, setThemeMode] = useState('dark');
  const [loggedInUser, setLoggedInUser] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      'http://localhost:3000/api/users/loggedInUser'
    );
    const data = await response.json();
    setLoggedInUser(data);
  });

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: amber[400],
      },
      secondary: {
        main: red[800],
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Nunito',
      },
    },
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <MyAppBar
          handleDrawerToggle={handleDrawerToggle}
          loggedInUser={loggedInUser}
        />
        <MyDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          setThemeMode={setThemeMode}
          themeMode={themeMode}
        />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MyLayout;
