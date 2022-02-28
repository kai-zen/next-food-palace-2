import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import SingleRow from '../components/shopping-cart/SingleRow';

export default function MyShoppingCart() {
  const [totalPrice, setTotalPrice] = useState(0);
  let allFoods = useSelector((state) => state.foods.allFoods);
  allFoods = allFoods.filter((food) => {
    return !food.deleted;
  });
  const currentCart = [...allFoods].filter((food) => {
    return food.isItInCart === true;
  });
  const calculateTotalPrice = () => {
    let currentTotalPrice = 0;
    for (const food of currentCart) {
      currentTotalPrice += food.price * food.cartQuantity;
    }
    setTotalPrice(currentTotalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  });

  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '88px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 68px)',
      }}
      square
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Shopping cart
      </Typography>
      <Table sx={{ maxWidth: '90%', m: 3 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Food name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Favorites</TableCell>
            <TableCell align="center">Cart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentCart.map((food) => {
            return (
              <SingleRow
                food={food}
                key={food.id}
                calculateTotalPrice={calculateTotalPrice}
              />
            );
          })}
        </TableBody>
      </Table>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ width: '100%', m: 3, ml: 20 }}
      >
        Total price:&nbsp;
        <Chip
          color="primary"
          label={`${totalPrice} $`}
          sx={{ fontSize: '22px' }}
        />
      </Typography>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{ display: 'block', mb: 3 }}
      >
        Order Now!
      </Button>
    </Paper>
  );
}
