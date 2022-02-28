import { Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const MainPanel = ({ loggedInUser }) => {
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
      {loggedInUser[0] && loggedInUser[0].isAdmin ? (
        <>
          <Typography variant="h3">
            Welcome to admin panel {loggedInUser[0].firstName}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: '80px' }}
            onClick={() => {
              router.push('/admin-panel/foods');
            }}
            fullWidth
            size="large"
          >
            Edit foods
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
