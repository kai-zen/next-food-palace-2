import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MySnack from '../components/login/MySnack';
import FormikSignUp from '../components/login/FormikSignUp';

export default function SignUp({ signUpSnacks, users }) {
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
      {signUpSnacks.map((snack, index) => {
        return <MySnack key={index} snack={snack} />;
      })}
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
          Sign up
        </Typography>
        <FormikSignUp users={users} />
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/users/signUpSnacks');
  const signUpSnacks = await response.json();
  const response2 = await fetch('http://localhost:3000/api/users');
  const users = await response2.json();
  return {
    props: {
      signUpSnacks,
      users,
    },
  };
}
