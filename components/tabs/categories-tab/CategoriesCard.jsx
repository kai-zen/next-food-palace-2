import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Rating } from '@mui/material';
import { Favorite, Info, ShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleToCart, toggleToFavorites } from '../../../features/foodsSlice';
import { useRouter } from 'next/router';

export default function SingleCategoriesCard({ food }) {
  let router = useRouter();
  const dispatch = useDispatch();
  const [heartColor, setHeartColor] = useState(
    food.isItInFav ? 'error' : 'action'
  );
  const [cartColor, setCartColor] = useState(
    food.isItInCart ? 'success' : 'action'
  );
  const heartColorToggler = () => {
    if (heartColor === 'action') {
      setHeartColor('error');
    } else {
      setHeartColor('action');
    }
  };
  const cartColorToggler = () => {
    if (cartColor === 'action') {
      setCartColor('success');
    } else {
      setCartColor('action');
    }
  };
  return (
    <Card
      sx={{
        maxWidth: '240px',
        boxShadow: 10,
        overflowY: 'auto',
      }}
    >
      <CardMedia
        component="img"
        alt={food.name}
        height="240px"
        image={food.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ whiteSpace: 'nowrap' }}
        >
          {food.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {food.price}$
        </Typography>
        <br />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Rating
            name="half-rating-read"
            defaultValue={food.rate}
            precision={0.5}
            readOnly
          />
          <div>
            <IconButton
              onClick={() => {
                dispatch(toggleToFavorites(food));
                heartColorToggler();
              }}
            >
              <Favorite color={heartColor} />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch(toggleToCart(food));
                cartColorToggler();
              }}
            >
              <ShoppingCart color={cartColor} />
            </IconButton>
            <IconButton onClick={() => router.push(`/single/${food.id}`)}>
              <Info />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
