import {
  Button,
  TextField,
  LinearProgress,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { editFood } from '../../../features/foodsSlice';

const EditFoodFormik = ({ food, setOpen }) => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.price) {
      errors.price = 'Required';
    }
    if (!values.category) {
      errors.category = 'Required';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: food.name,
      category: food.category,
      price: food.price,
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        dispatch(
          editFood({
            id: food.id,
            name: values.name,
            price: values.price,
            category: values.category,
            orderQuantity: food.orderQuantity,
            rate: food.rate,
            isItInFav: food.isItInFav,
            isItInCart: food.isItInCart,
            deleted: food.deleted,
            cartQuantity: food.cartQuantity,
            image: food.image,
          })
        );
        setSubmitting(false);
        setOpen(false);
      }, 400);
    },
  });
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Food name"
        name="name"
        autoComplete="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        autoFocus
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <br />
      <br />
      <Select
        fullWidth
        labelId="category-label"
        value={formik.values.category}
        name="category"
        id="category"
        onChange={formik.handleChange}
        error={formik.touched.category && Boolean(formik.errors.category)}
        helperText={formik.touched.category && formik.errors.category}
      >
        <MenuItem value="Pizza">Pizza</MenuItem>
        <MenuItem value="Pasta">Pasta</MenuItem>
        <MenuItem value="Burger">Burger</MenuItem>
        <MenuItem value="Drink">Drink</MenuItem>
        <MenuItem value="Fried">Fried</MenuItem>
        <MenuItem value="Salad">Salad</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
      <FormHelperText>choose category</FormHelperText>
      <br />
      <br />
      <TextField
        id="price"
        label="Price"
        type="number"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >
        Submit
      </Button>
      {formik.isSubmitting && <LinearProgress />}
    </Box>
  );
};

export default EditFoodFormik;
