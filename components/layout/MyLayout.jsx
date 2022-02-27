import React, { useState } from 'react';
import MyDrawer from './Drawer/MyDrawer';
import MyAppBar from './MyAppBar';

const MyLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <MyAppBar />
      <MyAppBar handleDrawerToggle={handleDrawerToggle} />
      <MyDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
};

export default MyLayout;
