import { Button, Grid, LinearProgress, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useFormik } from 'formik';
import NextLink from 'next/link';
import React, { useState } from 'react';
import MySnack from './MySnack';

const FormikSignUp = ({ users }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [message, setMessage] = useState('');
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
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(async () => {
        try {
          await axios.post('http://localhost:3000/api/users/sign-up', {
            id: users.length,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          });
          setSeverity('success');
          setMessage('Signed up successfully');
          setOpen(true);
          setSubmitting(false);
        } catch (err) {
          setSeverity('error');
          setMessage(
            err.response.data ? err.response.data.message : err.message
          );
          setOpen(true);
          setSubmitting(false);
        }
        setSubmitting(false);
      }, 400);
    },
  });
  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >
        Sign Up
      </Button>
      {formik.isSubmitting && <LinearProgress />}
      <NextLink href="/sign-in">
        <a>
          <Link href="#" variant="body2" color="secondary">
            Already have an account? Sign in
          </Link>
        </a>
      </NextLink>
      <MySnack
        open={open}
        setOpen={setOpen}
        snack={{
          severity,
          message,
        }}
      />
    </Box>
  );
};

export default FormikSignUp;
