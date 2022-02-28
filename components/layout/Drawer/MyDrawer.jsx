import { Drawer } from '@mui/material';
import React from 'react';
import MyDrawerList from './MyDrawerList';

const MyDrawer = ({
  mobileOpen,
  handleDrawerToggle,
  themeMode,
  setThemeMode,
}) => {
  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 260,
          },
        }}
      >
        <MyDrawerList />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 260,
          },
        }}
        open
      >
        <MyDrawerList themeMode={themeMode} setThemeMode={setThemeMode} />
      </Drawer>
    </>
  );
};

export default MyDrawer;
