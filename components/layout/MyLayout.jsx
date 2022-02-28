import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { amber, red } from '@mui/material/colors';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MyDrawer from './Drawer/MyDrawer';
import MyAppBar from './MyAppBar';

const MyLayout = ({ children, currenttheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: currenttheme,
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
        <MyAppBar />
        <MyAppBar handleDrawerToggle={handleDrawerToggle} />
        <MyDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MyLayout;
