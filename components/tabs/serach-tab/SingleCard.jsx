import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Rating } from '@mui/material';
import { Favorite, Info, ShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleToCart, toggleToFavorites } from '../../../features/foodsSlice';
import { useRouter } from 'next/router';

export default function SearchSingleCard({ food }) {
  const router = useRouter();
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
        display: 'flex',
        minHeight: '160px',
        m: 3,
        width: { sm: '80%', md: '75%' },
        maxWidth: '600px',
        minWidth: '320px',
        justifyContent: 'space-between',
        boxShadow: 5,
        overflowY: 'auto',
      }}
      key={food.id}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="div"
          variant="h5"
          sx={{ fontWeight: 'bold', textOverflow: 'ellipsis' }}
        >
          {food.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {`${food.price} $`}
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={food.rate}
          precision={0.5}
          readOnly
        />
        <div>
          <IconButton
            onClick={() => {
              dispatch(toggleToCart(food));
              cartColorToggler();
            }}
          >
            <ShoppingCart color={cartColor} />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleToFavorites(food));
              heartColorToggler();
            }}
          >
            <Favorite color={heartColor} />
          </IconButton>
          <IconButton onClick={() => router.push(`/single/${food.id}`)}>
            <Info />
          </IconButton>
        </div>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 136, height: 136, margin: '11px' }}
        image={food.image}
        alt={food.name}
      />
    </Card>
  );
}
