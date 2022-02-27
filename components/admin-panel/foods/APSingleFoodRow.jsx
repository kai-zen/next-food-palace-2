import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDeleteFood } from '../../../features/foodsSlice';

const APSingleFoodRow = ({ food, setOpen, setEditingFood }) => {
  const dispatch = useDispatch();
  const [deleteColor, setDeleteColor] = useState(
    food.deleted ? 'error' : 'action'
  );
  const deleteColorToggler = () => {
    if (deleteColor === 'action') {
      setDeleteColor('error');
    } else {
      setDeleteColor('action');
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
      <TableCell align="center">{food.category}</TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => {
            setEditingFood(food);
            setOpen(true);
          }}
        >
          <Edit color="warning" />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => {
            deleteColorToggler();
            dispatch(toggleDeleteFood(food));
          }}
        >
          <Delete color={deleteColor} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default APSingleFoodRow;
