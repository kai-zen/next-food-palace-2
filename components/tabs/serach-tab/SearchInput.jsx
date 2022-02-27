import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput({ allFoods, setFilteredFoods, bgColor }) {
  const handleSearch = (word) => {
    const notFilteredFoods = [...allFoods];
    let afterFilterFoods = notFilteredFoods.filter((notFilteredFood) =>
      notFilteredFood.name.toLowerCase().includes(word.toLowerCase())
    );
    setFilteredFoods(afterFilterFoods);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '97%',
        maxWidth: 460,
        opacity: '0.7',
        '&:hover': {
          opacity: '1',
        },
        bgcolor: bgColor,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search the food you want!"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '10px' }} aria-label="search" color="secondary">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
