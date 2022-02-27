import {
  Paper,
  Rating,
  Typography,
  IconButton,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import React, { useState } from 'react';
import SingleComment from '../tabs/comments-tab/SingleComment';
import { Close, Favorite, ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToCart, toggleToFavorites } from '../../features/foodsSlice';
import AddCommentDialog from './AddCommentDialog';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SingleFoodPage = () => {
  const router = useRouter();
  const foodId = router.query.foodId;
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.foods.allFoods);
  let comments = useSelector((state) => state.comments.comments);
  comments = comments.filter((comment) => {
    return !comment.isDeleted;
  });
  const reversed = [...comments].reverse();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

  const food = allFoods[foodId];
  const thisFoodComments = [...reversed].filter((comment) => {
    return comment.foodId === food.id;
  });
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

  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '98px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {food.deleted && router.push('/')}
      <Image
        src={`${food.image}`}
        alt={food.name}
        style={{
          margin: '20px',
          borderRadius: '50%',
          width: '80%',
          maxWidth: '450px',
          border: '2px solid black',
        }}
      />
      <Typography variant="h4" sx={{ m: 3 }}>
        {food.name}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Price: {food.price} $
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Order quantity: {food.orderQuantity}
      </Typography>
      <Rating
        sx={{ m: 2 }}
        size="large"
        defaultValue={food.rate}
        precision={0.5}
        readOnly
      />
      <div style={{ margin: '0 10px 10px' }}>
        <IconButton
          size="large"
          onClick={() => {
            dispatch(toggleToCart(food));
            cartColorToggler();
          }}
        >
          <ShoppingCart fontSize="inherit" color={cartColor} />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => {
            dispatch(toggleToFavorites(food));
            heartColorToggler();
          }}
        >
          <Favorite fontSize="inherit" color={heartColor} />
        </IconButton>
      </div>
      <div style={{ margin: '0px 10px 20px 10px', float: 'left' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            if (loggedInUser[0]) {
              setOpen(true);
            } else {
              navigate('/sign-in');
            }
          }}
        >
          Leave a comment about this food
        </Button>
        <AddCommentDialog
          setOpenSnack={setOpenSnack}
          setOpen={setOpen}
          open={open}
          foodId={food.id}
          chip={food.name}
        />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnack}
        autoHideDuration={5000}
        onClose={() => {
          setOpenSnack(false);
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              setOpenSnack(false);
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          variant="filled"
          onClose={() => {
            setOpenSnack(false);
          }}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thanks for your comment
        </Alert>
      </Snackbar>
      {thisFoodComments.map((comment) => {
        return <SingleComment key={comment.id} comment={comment} />;
      })}
    </Paper>
  );
};

export default SingleFoodPage;
