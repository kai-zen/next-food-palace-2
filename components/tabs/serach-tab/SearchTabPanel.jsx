import { Typography } from '@mui/material';
import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchSingleCard from './SingleCard';

const SearchTabPanel = ({ allFoods }) => {
  allFoods = allFoods.filter((food) => {
    return !food.deleted;
  });
  const [filteredFoods, setFilteredFoods] = useState([]);

  const whatToRender = () => {
    if (filteredFoods.length === allFoods.length || filteredFoods.length === 0)
      return null;
    else {
      return filteredFoods.map((food) => {
        return <SearchSingleCard food={food} key={food.id} />;
      });
    }
  };

  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        sx={{
          mt: '21vh',
          mb: 2,
          fontWeight: 'bold',
          fontFamily: 'Bad Script',
          textAlign: 'center',
        }}
      >
        Food Palace
      </Typography>
      <SearchInput allFoods={allFoods} setFilteredFoods={setFilteredFoods} />
      {whatToRender()}
    </>
  );
};

export default SearchTabPanel;
