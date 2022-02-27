import { Favorite } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import CategoriesCardsGrid from '../tabs/categories-tab/CategoriesCardGrid';

const Favorites = () => {
  let allFoods = useSelector((state) => state.foods.allFoods);
  allFoods = allFoods.filter((food) => {
    return !food.deleted;
  });
  const favorites = [...allFoods].filter((food) => {
    return food.isItInFav === true;
  });
  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '98px',
        pb: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 148px)',
      }}
      square
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Favorite Foods
        <Favorite color="secondary" fontSize="large" />
      </Typography>
      {favorites.length !== 0 ? (
        <CategoriesCardsGrid foodsToShow={favorites} />
      ) : (
        <Typography
          variant="h5"
          sx={{ mt: 20, fontStyle: 'italic' }}
          color="textSecondary"
        >
          --No foods in your favorites!--
        </Typography>
      )}
    </Paper>
  );
};

export default Favorites;
