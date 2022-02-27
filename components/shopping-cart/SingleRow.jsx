import { Favorite, ShoppingCart } from '@mui/icons-material';
import { IconButton, TableCell, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeCartQuantity,
  toggleToCart,
  toggleToFavorites,
} from '../../features/foodsSlice';

const SingleRow = ({ food, calculateTotalPrice }) => {
  const dispatch = useDispatch();
  const [heartColor, setHeartColor] = useState(
    food.isItInFav ? 'error' : 'action'
  );
  const heartColorToggler = () => {
    if (heartColor === 'action') {
      setHeartColor('error');
    } else {
      setHeartColor('action');
    }
  };
  return (
    <TableRow
      key={food.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        {food.name}
      </TableCell>
      <TableCell align="center">{food.price} $</TableCell>
      <TableCell align="center">
        <TextField
          type="number"
          InputProps={{
            inputProps: {
              max: 100,
              min: 1,
            },
          }}
          variant="standard"
          defaultValue={food.cartQuantity}
          onChange={(e) => {
            dispatch(
              changeCartQuantity({
                index: food.id,
                quantity: e.target.value,
              })
            );
            calculateTotalPrice();
          }}
          sx={{ width: '40px' }}
        />
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => {
            dispatch(toggleToFavorites(food));
            heartColorToggler();
          }}
        >
          <Favorite color={heartColor} />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => {
            dispatch(toggleToCart(food));
          }}
        >
          <ShoppingCart color="success" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default SingleRow;
