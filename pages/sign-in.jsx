import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InfoAlert from '../components/login/InfoAlert';
import MySnack from '../components/login/MySnack';
import FormikSignIn from '../components/login/FormikSignIn';

export default function SignIn({ signInSnacks }) {
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

export async function getStaticProps() {
  const response2 = await fetch('http://localhost:3000/api/users/signInSnacks');
  const signInSnacks = await response2.json();
  return {
    props: {
      signInSnacks,
    },
  };
}
