import { Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const MainPanel = () => {
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const router = useRouter();
  return (
    <Paper
      sx={{
        width: { sm: 'calc(80% - 260px)' },
        ml: { sm: '260px' },
        p: '138px 10% 50px 10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 148px)',
      }}
    >
      {loggedInUser && loggedInUser.isAdmin ? (
        <>
          <Typography variant="h3">
            Welcome to admin panel {loggedInUser.firstName}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: '60px' }}
            onClick={() => {
              router.push('/admin-panel/foods');
            }}
            color="primary"
            fullWidth
            size="large"
          >
            Edit Foods
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '20px' }}
            onClick={() => {
              router.push('/admin-panel/users');
            }}
            color="secondary"
            fullWidth
            size="large"
          >
            Edit users
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '20px' }}
            onClick={() => {
              router.push('/admin-panel/comments');
            }}
            fullWidth
            size="large"
          >
            Edit comments
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            router.push('/');
          }}
          variant="outlined"
        >
          Acces denied
        </Button>
      )}
    </Paper>
  );
};

export default MainPanel;
