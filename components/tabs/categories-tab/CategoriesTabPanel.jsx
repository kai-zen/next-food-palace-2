import { useState } from 'react';
import CategoriesCardsGrid from './CategoriesCardGrid';
import ChooseInput from './ChooseInput';

const CategoriesTabPanel = ({ allFoods }) => {
  allFoods = allFoods.filter((food) => {
    return !food.deleted;
  });
  const [selectedCat, setSelectedCat] = useState('pizza');

  let foodsToShow = [...allFoods].filter(
    (food) => food.category === selectedCat
  );

  if (foodsToShow.length === 0) {
    foodsToShow = allFoods;
  }

  return (
    <>
      <ChooseInput setSelectedCat={setSelectedCat} />
      <CategoriesCardsGrid foodsToShow={foodsToShow} />
    </>
  );
};

export default CategoriesTabPanel;
