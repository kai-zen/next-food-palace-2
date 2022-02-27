import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import InfoAlert from './InfoAlert';
import MySnack from './MySnack';
import FormikSignIn from './FormikSignIn';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const signInSnacks = useSelector((state) => state.users.signInSnacks);

  return (
    <Container
      component="main"
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '68px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {signInSnacks.map((snack, index) => {
        return <MySnack key={index} snack={snack} />;
      })}
      <InfoAlert />
      {loggedInUser[0] && router.push('/')}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormikSignIn />
      </Box>
    </Container>
  );
}
