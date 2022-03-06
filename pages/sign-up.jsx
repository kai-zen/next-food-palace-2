import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormikSignUp from '../components/login/FormikSignUp';
import db from '../app/db';
import User from '../app/models/user';

export default function SignUp({ users }) {
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
  await db.connect();
  let users = await User.find({}).lean();
  users = JSON.parse(JSON.stringify(users));
  await db.disconnect();
  return {
    props: {
      users,
    },
  };
}
