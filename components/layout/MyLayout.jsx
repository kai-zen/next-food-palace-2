import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { amber, red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import MyDrawer from './Drawer/MyDrawer';
import MyAppBar from './MyAppBar';
import Cookies from 'js-cookie';

const MyLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMode, setThemeMode] = useState();
  const [loggedInUser] = useState([]);

  useEffect(() => {
    const themeModeCookie = Cookies.get('themeMode');
    if (themeModeCookie) {
      setThemeMode(themeModeCookie);
    } else setThemeMode('light');
  }, []);

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
