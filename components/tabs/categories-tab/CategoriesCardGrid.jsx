import { Grid } from '@mui/material';
import React from 'react';
import SingleCategoriesCard from './CategoriesCard';

const CategoriesCardsGrid = ({ foodsToShow }) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
    >
      {foodsToShow.map((food) => {
        return (
          <Grid
            item
            xs={10}
            md={6}
            lg={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
            key={food.id}
          >
            <SingleCategoriesCard food={food} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CategoriesCardsGrid;
