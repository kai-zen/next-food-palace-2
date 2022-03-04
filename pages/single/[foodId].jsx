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
import SingleComment from '../../components/tabs/comments-tab/SingleComment';
import { Close, Favorite, ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToCart, toggleToFavorites } from '../../features/foodsSlice';
import AddCommentDialog from '../../components/single-food/AddCommentDialog';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SingleFoodPage = ({ food, thisFoodComments, comments }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.foods.favorites);
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const cart = useSelector((state) => state.foods.cart);
  const [heartColor, setHeartColor] = useState(
    favorites.find((f) => f.id === food.id) ? 'error' : 'action'
  );
  const [cartColor, setCartColor] = useState(
    cart.find((f) => f.id === food.id) ? 'success' : 'action'
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
      <div
        style={{
          position: 'relative',
          width: '80%',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '40%',
        }}
      >
        <Image
          width={450}
          height={450}
          src={`${food.image}`}
          alt={food.name}
          className="single-food-image"
        />
      </div>

      <Typography variant="h4" sx={{ m: 3 }}>
        {food.name}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Price: {food.price}$
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
            if (loggedInUser) {
              setOpen(true);
            } else {
              router.push('/sign-in');
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
          comments={comments}
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

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/foods');
  const allFoods = await response.json();
  const paths = allFoods.map((food) => {
    return {
      params: { foodId: `${food.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response1 = await fetch(
    `http://localhost:3000/api/foods/${params.foodId}`
  );
  const food = await response1.json();
  const response4 = await fetch('http://localhost:3000/api/comments');
  const comments = await response4.json();
  const thisFoodComments = [...comments].filter((c) => {
    return c.foodId === params.foodId;
  });
  return {
    props: {
      food,
      thisFoodComments,
      comments,
    },
    revalidate: 10,
  };
}

export default SingleFoodPage;
