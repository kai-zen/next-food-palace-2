import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  LinearProgress,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useFormik } from 'formik';
import NextLink from 'next/link';
import React from 'react';

const FormikSignIn = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(async () => {
        try {
          const { data } = await axios.post('/api/users/loggedInUser', {
            email: values.email,
            password: values.password,
          });
          alert('succss login');
        } catch (err) {
          alert(err.response.data ? err.response.data.message : err.message);
        }
        setSubmitting(false);
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
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        autoFocus
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        autoComplete="current-password"
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >
        Sign In
      </Button>
      {formik.isSubmitting && <LinearProgress />}
      <NextLink href="/sign-up">
        <a>
          <Link variant="body2" color="secondary">
            {"Don't have an account? Sign Up"}
          </Link>
        </a>
      </NextLink>
    </Box>
  );
};

export default FormikSignIn;
