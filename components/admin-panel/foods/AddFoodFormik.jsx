import { PhotoCamera } from '@mui/icons-material';
import {
  Button,
  TextField,
  LinearProgress,
  Select,
  MenuItem,
  FormHelperText,
  Input,
} from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFood } from '../../../features/foodsSlice';

const AddFoodFormik = ({ setOpen }) => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foods.allFoods);
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
      name: '',
      category: '',
      price: 0,
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        let photo = localStorage.getItem('uploadedImage');
        dispatch(
          addFood({
            id: allFoods.length,
            name: values.name,
            price: Number(values.price),
            category: values.category,
            orderQuantity: 0,
            rate: 0,
            isItInFav: false,
            isItInCart: false,
            deleted: false,
            cartQuantity: 1,
            image: photo,
          })
        );
        setSubmitting(false);
        setOpen(false);
      }, 400);
    },
  });
  const handleUploadedPhoto = () => {
    let photoFile = document.getElementById('addPhoto').files[0];
    const reader = new FileReader();
    reader.readAsDataURL(photoFile);

    reader.addEventListener('load', () => {
      localStorage.setItem('uploadedImage', reader.result);
    });
  };

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
      <label htmlFor="addPhoto" onChange={handleUploadedPhoto}>
        <Input
          accept="image/*"
          id="addPhoto"
          multiple
          type="file"
          sx={{ display: 'none' }}
        />
        <Button
          variant="contained"
          component="span"
          fullWidth
          endIcon={<PhotoCamera />}
          sx={{ mt: '15px' }}
        >
          Upload
        </Button>
      </label>
      <Button
        type="submit"
        color="secondary"
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

export default AddFoodFormik;
